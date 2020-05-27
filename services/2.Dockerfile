FROM node:12 AS build

WORKDIR /app
COPY package* yarn.lock ./
RUN yarn install --production
COPY tsconfig* src/ ./
COPY config/ ./config
RUN yarn build
# RUN ls -lha

FROM node:12-alpine

LABEL app="ap-docker"
COPY --from=build app/ ./
COPY --from=build app/config/ ./config

ENV NODE_ENV production
CMD ["yarn", "start:prod"]