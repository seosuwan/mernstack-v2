FROM node:16
WORKDIR /mern-stack-backend
COPY package*.json .
ENV NODE_ENV development
ENV DEVIAN_FRONTEND=noninteractive
RUN npm install -g npm@8.3.0
RUN npm install typescript -g
RUN npm install -g ts-node

EXPOSE $NODE_DOCKER_PORT

CMD [ "npm", "start" ]
COPY . .
# FROM node:16

# WORKDIR /mern-stack-backend
# RUN yarn install
# RUN npm install typescript -g
# RUN npm install -g nodemon 
# RUN npm i ts-node-dev --save-dev
# COPY package.json .
# COPY . .
# CMD ["yarn", "start"]
# FROM node:16

# # workdir 지정. 반드시 상위에 적을 것(COPY등 경로에 영향을 줘야하기 때문)
# # 절대경로여야 함. 상대 경로 ㄴㄴ
# RUN yarn install

# RUN mkdir -p /usr/src/app

# WORKDIR /usr/src/app

# # 로컬에 있는 package.json을 컨테이너의 ./ 경로에 COPY 종속성 설치해야 하니까
# COPY ././ /usr/src/app




# # 전체 소스 코드를 다 들고오자. 단, dockerignore는 없어야 함. 
# # COPY ./ ./

# EXPOSE 80
# CMD ["yarn", "start"]

# FROM node:12
# WORKDIR /backend
# COPY package*.json /backend/
# RUN npm install
# COPY . /backend
# EXPOSE 8080
# CMD [ "node", "server.ts" ]


# FROM node:14

# WORKDIR /backend

# COPY package.json .

# # RUN npm i -g npm@3.10.10

# RUN npm install
# # RUN yarn install

# # RUN npm update

# # RUN npm install 

# COPY . .

# CMD npm start