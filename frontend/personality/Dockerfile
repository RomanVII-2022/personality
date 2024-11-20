FROM node:20.18-alpine

WORKDIR /app/frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000