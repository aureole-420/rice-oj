# Collaborating Online Judge System:

## Overview	
The system contains three parts. 

1. Frontend built with AngularJS
2. Backend server with Express and Node.js. Redis is used for caching.
3. A server built with Python Flask to execute client-submission in docker.

## Use
To build frontend

> cd week3/oj-client.  
> ng build --watch

To start backend server and python server
> cd week3/oj-server.   
> npm start

> cd week3/executor.   
> python3 executor_server.py

