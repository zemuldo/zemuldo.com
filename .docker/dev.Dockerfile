FROM node:alpine

WORKDIR /usr/src/app

RUN apk add inotify-tools

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001 3002
