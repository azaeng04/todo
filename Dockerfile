FROM node:lts-alpine

RUN apk add curl

WORKDIR /todo/

COPY . /todo/

RUN yarn --network-timeout 1000000000

VOLUME [ "node_modules:/todo/node_modules" ]