FROM node:alpine

WORKDIR /usr/src/app

RUN apk add inotify-tools

COPY package*.json ./

RUN npm install

ENV NODE_ENV=production

COPY . .

EXPOSE 3000
