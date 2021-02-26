# Dockerfile for React client
FROM node:10

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i --silent

COPY . .

EXPOSE 3000
CMD ["npm","start"]