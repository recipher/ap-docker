FROM node:12-alpine

LABEL app="ap-docker"
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

CMD ["yarn", "serve"]