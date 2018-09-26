#! /bin/bash

# Add launcher.sh to start the redis service, and execute other terminal commands.

# 清空端口
fuser -k 3000/tcp
fuser -k 5000/tcp

# service redis_6379 start
brew services start redis

service nginx start

cd ./oj-server
nodemon server.js & 

cd ../executor
pip3 install -r requirement.txt
python3 executor_server.py &

# 部署阶段，前端的东西都在public里面，所以不需要启动oj-client里的东西

echo "==================================="
read -p "PRESS [enter] to terminate processes" PRESSKEY  # 等待

fuser -k 3000/tcp
fuser -k 5000/tcp

service redis_6379 stop
service nginx stop


