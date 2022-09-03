FROM node:14

WORKDIR /usr/src/app

ENV PORT=80
ENV API_URL=https://zemuldo.azurewebsites.net/api

COPY package*.json ./

RUN npm install

ENV NODE_ENV=production

COPY . .

RUN npm run build

EXPOSE 80

CMD ["npm", "start"]