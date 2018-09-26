const ProblemModel = require('../models/problemModel');

// let problems = [ 
//     {
//       "id" : 1,
//       "name": "Two Sum",
//       "desc": "Given an array of integers, find two numbers such that they add up to a specific target number.",
//       "difficulty": "easy"
//     }, 
    // {
    //   "id" : 2,
    //   "name": "Three Sum",
    //   "desc": "Given an array of integers, find three numbers such that they add up to a specific target number.",
    //   "difficulty": "medium"
    // }
//   ];


  const getProblems = function() {
      return new Promise( (resolve, reject) => {
        //   resolve(problems);
        ProblemModel.find({}, function(err, problems) {
                if (err) {
                    reject(err);
                } else {
                    resolve (problems);
                }
        })
      })
  }

  const getProblem = function( id ) {
      return new Promise ((resolve, reject) => {
        // resolve(problems.find(problem => problem.id === id))
        ProblemModel.findOne({id: id}, function (err, problem) {
            if (err) {
                reject(err);
            } else {
                resolve (problem);
            }
        });
      });
  }


  const addProblem = function(newProblem) {
      return new Promise((resolve, reject) => {

          ProblemModel.findOne({name: newProblem.name}, function(err, data) {
              if (data) {
                  reject ("Problem name already exists");
              } else {
                  ProblemModel.count({}, function(err, count) {
                      newProblem.id = count+1;
                      let mongoProblem = new ProblemModel(newProblem);
                      mongoProblem.save();
                      resolve(mongoProblem);
                  })

              }
          })
        //   if (problems.find(problem => problem.name === newProblem.name)) {
        //       reject('Problem already exists');
        //   } else {
        //       newProblem.id = problems.length + 1;
        //     //   problems.push(newProblem);
        //       resolve(newProblem);
        //   }
      })
  }
  module.exports = {
      getProblems,
      addProblem,
      getProblem
  }