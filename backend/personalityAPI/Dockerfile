FROM node:20.18-alpine

WORKDIR /app/backend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5555