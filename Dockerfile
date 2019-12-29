FROM node:11

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

ENV NODE_ENV=production

COPY . .

RUN npm run build

RUN npm run build-storybook

EXPOSE 3001 3002

CMD ["npm", "start"]