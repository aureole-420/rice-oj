const express = require('express');
const router = express.Router();

const problemService = require('../services/problemServices')

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const nodeRestClient = require('node-rest-client').Client; // for server to call the RESTful API
const restClient = new nodeRestClient();


// python flask server listen on port 5000 by default
EXECUTOR_SERVER_URL = 'http://localhost:5000/build_and_run';
// register a method
restClient.registerMethod('build_and_run', EXECUTOR_SERVER_URL, 'POST');

router.post('/build_and_run', jsonParser, (req, res) => {
    const userCode = req.body.user_code;
    const lang = req.body.lang;
    console.log("<oj-server.rest.js> parsing request");
    console.log('lang:', lang, 'code:', userCode);

    // this is the method we registered before
    restClient.methods.build_and_run(
        {
            data: {code: userCode, lang: lang},
            headers: {'Content-Type': 'application/json'}
        },
        (data, response) => {
            // response: raw data, data: parsed response
            const text = `Build output: ${data['build']}, execute output: ${data['run']}`;
            res.json(text);
        }
    )
})

router.get('/problems', function(req, res) {
    problemService.getProblems()
        .then(problems => res.json(problems));
})

// get problem given an id
router.get('/problems/:id', (req, res) => {
    const id = req.params.id;
    problemService.getProblem(+id)
        .then(problem => res.json(problem));
})

router.post('/problems', jsonParser, (req, res) => {
    problemService.addProblem(req.body)
        .then (
            // resolve
            (problems) => {
                res.json(problems);
            },
            // reject
            (error) => {
                res.status(400).send("Problem name alreayd exists");
            }
        )
})

module.exports = router;