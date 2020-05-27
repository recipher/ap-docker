FROM node:12 AS build

WORKDIR /app
COPY package* yarn.lock ./
RUN yarn install --production
COPY public ./public
COPY src ./src
RUN yarn build

FROM nginx:alpine

LABEL app="ap-docker"

RUN rm -rf /usr/share/nginx/html/*
COPY nginx/default.conf /etc/nginx/conf.d
COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]