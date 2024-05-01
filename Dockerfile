FROM node:alpine

LABEL maintainer="Romuald Oluwatobi <romualdnoualinon@gmail.com>"
LABEL description="Docker image to run a landing page built using Reactjs"

WORKDIR /app

COPY *.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]
