FROM node:14.17-alpine
WORKDIR /app
COPY package*.json ./

RUN yarn
COPY . .

RUN yarn
EXPOSE 5000

CMD ["yarn", "start:prod"]