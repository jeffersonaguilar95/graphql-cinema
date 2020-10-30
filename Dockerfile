FROM node:lts

ENV NODE_ENV production

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN echo $NODE_ENV

COPY . .

EXPOSE 4000

CMD [ "npm", "run", "start" ]
