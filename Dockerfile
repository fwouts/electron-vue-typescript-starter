ARG node_version=10.13.0
FROM node:$node_version-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
