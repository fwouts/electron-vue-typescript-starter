ARG node_version=lts
FROM node:$node_version-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build:dir
