FROM node:12-alpine

LABEL app="ap-docker"
WORKDIR /app
COPY . .
RUN yarn install

ENV NODE_ENV development
CMD ["yarn", "start"]