var redisClient = require('../modules/redisClient');
const TIMEOUT_IN_SECONDS = 3600; // one hour timeout

module.exports = function(io) {
    // collaboration sessions:
    // record all the participants in each session
    // so the server can send changes to all participants in a session
    var collaborations = {};

    // Redis can serve different application
    // each application has their own session
    // we also use Redis for our second project
    var sessionPath = '/editorSocket/';

    // map from socket Id to session id;
    var socketIdToSessionId = {};

    // when 'connection' event happens,
    io.on('connection', socket => {
        // console.log(socket);
        // var message = socket.handshake.query['message'];
        // get session id
        let sessionId = socket.handshake.query['sessionId'];
        // console.log(message);

        socketIdToSessionId[socket.id] = sessionId; // map socket.id to sessionId

        // // if sessionId is not in collaborations, it means no one does this problem before
        // if (!(sessionId in collaborations)) {
        //     collaborations[sessionId] = {
        //         'participants' : []
        //     };
        // }

        // collaborations[sessionId]['participants'].push(socket.id);

        // when connection, first check in collaborations
        // if (sessionId in collaborations) {
        //     // add the current socketId to participants
        //     collaborations[sessionId]['participants'].push(socket.id);
        // } else {
        //     // not in memory, check in redis
        //     redisClient.get(sessionPath  + sessionId, function(data) {
        //         if (data) {
        //             // if exit in Redis, restore  the changes from redis
        //             console.log("session terminated previously, get back from redis: " + data);

        //             collaborations[sessionId] = {
        //                 'cachedInstructions' : JSON.parse(data),
        //                 'participants': [] // empty, will add the current participant later
        //             }
        //         } else {
        //             // this may be the first time created or expired
        //             // create new session
        //             console.log('create new session');
        //             collaborations[sessionId] = {
        //                 'cachedInstructions':[],
        //                 'participants':[]
        //             };
        //         }
        //         // add the current socket into participants list
        //         collaborations[sessionId]['participants'].push(socket.id);
        //     })
        // };
        redisClient.get("abc", data => {
            console.log("###### check redis.get: " + data);
        });

        if (sessionId in collaborations) {
			collaborations[sessionId]['participants'].push(socket.id);

			// let participants = collaborations[sessionId]['participants'];
			// for (i = 0; i < participants.length; i++) {
			// 	io.to(participants[i]).emit("userChange", participants);
            // }
            
            // test

		} else {
			// new session created
			redisClient.get(sessionPath + sessionId, function(data) {
                console.log("<test>: redis.get data: " + data);
				if (data && data.length != 0) { // 单纯if(data)还不够，还有返回data = []的情况
					console.log('session terminated previously, pulling back from redis');
					collaborations[sessionId] = {
						'cachedInstructions': JSON.parse(data),
						'participants': []
					};
				} else {
					console.log('creating new sessionId');
					collaborations[sessionId] = {
						'cachedInstructions': [],
						'participants': []
					};					
				}

				collaborations[sessionId]['participants'].push(socket.id);
				// io.to(socket.id).emit("userChange", socket.id);
			});
		}



        // socket event listeners
        // delta is the change info
        // it records the row and column of the changes
        socket.on('change', delta => {
            console.log('change ' + socketIdToSessionId[socket.id] + ' ' +delta);
            // get session id based on socket.id
            let sessionId = socketIdToSessionId[socket.id];
            if (sessionId in collaborations) {
                // store the changes
                collaborations[sessionId]['cachedInstructions'].push(['change', delta, Date.now()]);


                // get all participants on this session
                let participants = collaborations[sessionId]['participants'];
                //send changes to all participants
                for (let i = 0; i < participants.length; i++) {
                    // skip the one who created this change
                    if (socket.id != participants[i]) {
                        console.log('#### socket is sending change to socket: ' + sessionId + "--"+participants[i]);
                        io.to(participants[i]).emit("change", delta);
                    }
                }
            } else {
                console.log("could not tie socket id to any collaborations");
            }
        });

        socket.on('restoreBuffer', () => {
            //get sessionId
            let sessionId = socketIdToSessionId[socket.id];
            console.log('socket' + socket.id + 'disconnected from session ' + sessionId);
            
            // first check if the session in memory
            if (sessionId in collaborations) {
                // get the history instructions
                let instructions = collaborations[sessionId]['cachedInstructions'];
                // emit change event for every history changes
                // so that participants can get the history changes
                for (let i = 0; i < instructions.length; i++) {
                    // instructions[i][0]: change
                    // instrunctions[i][1]: change value(delta)
                    socket.emit(instructions[i][0], instructions[i][1]);
                }
            } else {
                console.log('could not find socket id in collaborations');
            }
        });

        socket.on('disconnect', function() {
            let sessionId = socketIdToSessionId[socket.id];
            console.log('disconnect session' + sessionId, 'socket id:' + socket.id);
            
            let foundAndRemoved = false;

            if (sessionId in collaborations) {
                let participants = collaborations[sessionId]['participants'];
                let index = participants.indexOf(socket.id);

                // if find then remove
                if (index >= 0) {
                    // remove the participants
                    participants.splice(index, 1);
                    foundAndRemoved = true;
                    // then  check if this is the last participants
                    if (participants.length == 0) {
                        console.log('last participant in collaboration, committing to redis and remove from memory');

                        let key = sessionPath + sessionId;

                        let value = JSON.stringify(collaborations[sessionId]['cachedInstructions']);
                        

                        // store in redis
                        redisClient.set(key, value, redisClient.redisPrint);

                        // set expire time
                        redisClient.expire(key, TIMEOUT_IN_SECONDS);

                        delete collaborations[sessionId];
                    }
                }
            }

            if (!foundAndRemoved) {
                // if reach here, debug needed
                console.log("warning: could not find the socket.id in collaborations");
            }
        })

        // // reply to socket.id, emit 'message' event so that client side can get the message
        // io.to(socket.id).emit('message', 'hehe from server');
    })
}