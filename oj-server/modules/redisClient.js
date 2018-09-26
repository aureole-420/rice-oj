// singleton 
var redis = require('redis');

// only one client is created
var client = redis.createClient();

// we only call our own wrapper set and get to store and get values from redis
function set(key, value, callback) {
    // error is the first argument, so that we don't forget to handle error
    client.set(key, value, function(err, res){
        if (err) {
            console.log('<redisClient.set()> error in Redis.SET: ' + err);
            return;
        }
        console.log('<redisClient.set()>successful Redis.SET: ' + res);
        callback(res);
    });
}

function get(key, callback) {
    client.get(key, function(err, res) {
        if (err) {
            console.log('<redisClient.get()> error in Redis.GET: ' +err);
            return;
        } 
        console.log('<redisClient.get()> successful Redis.GET: ' + res);
        callback(res);
    })
}

function expire(key, timeInSeconds) {
    client.expire(key, timeInSeconds);
}

function quit() {
    client.quit();
}

module.exports = {
    get: get,
    set: set,
    expire: expire,
    quit: quit,
    redisPrint: redis.print // directly export the function in redis
}