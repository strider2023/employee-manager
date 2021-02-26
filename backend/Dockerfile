#  Dockerfile for Node Express Backend
FROM node:10

# ENV DB_URL=mongodb://localhost:27017/employee-manager

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./

RUN npm i --silent

COPY . .

EXPOSE 5000
CMD ["npm","start"]