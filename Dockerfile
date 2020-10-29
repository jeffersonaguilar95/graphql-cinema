FROM node:latest

ARG NODE_ENV=production

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 4000

CMD [ "npm", "run", "start:prod" ]
