FROM node:lts-jessie as build-stage

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build


FROM nginx:1.12-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /usr/src/app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]