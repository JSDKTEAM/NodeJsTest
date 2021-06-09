FROM node:13.10-slim
WORKDIR usr/src/app1

COPY ./package*.json ./
RUN npm install
COPY ./ ./
EXPOSE 3000