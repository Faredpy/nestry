#FROM node:12.13-alpine
#FROM node:13.12.0-alpine
FROM node:16.13.1
#FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]