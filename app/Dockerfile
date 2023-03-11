# nginx:stable-alpine doesn't contain npm or yarn, so we need to use the node image to run 'yarn install' first.

FROM node:18-alpine as build-stage
WORKDIR /app

# copy only the relevant files, and especially do not copy node_modules.
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY tsconfig.json vue.config.js babel.config.js ./
ADD src /app/src
ADD public /app/public

# creates the directory ./dist (/app/dist) and builds the project.
RUN yarn build

FROM nginx:stable-alpine as serve-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/

ENV VIRTUAL_HOST=gstav.se,www.gstav.se
ENV LETSENCRYPT_HOST=gstav.se,www.gstav.se
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

