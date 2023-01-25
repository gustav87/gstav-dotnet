FROM node:16-alpine
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
RUN npm install -g http-server
ENV VIRTUAL_HOST=gstav.se
ENV LETSENCRYPT_HOST=gstav.se
EXPOSE 80
CMD npx http-server -p 80 dist

