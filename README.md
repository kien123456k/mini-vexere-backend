# ![alt text](https://raw.githubusercontent.com/kien123456k/mini-vexere-Frontend/e320a483c54ed5f74a52cb4357aaa175e720555e/src/assets/images/logo.svg) Mini Vexere Backend

## Introdution
Just some APIs for Mini-Vexere including admin dashboard to manage data.

## Project setup
Before jump in to this project, you will have to
create `.env.dev` file with the content exactly like `.env.example` file. Then replace properties with suitable value for your Frontend and Database server.
### Install dependencies
```
yarn install
```

### Run project locally 
your `DATABASE_URL` should be `mongodb://localhost:27017`
```
yarn start
```
### Run with Docker
your `DATABASE_URL` should be `mongodb://mongodb:27017`
```
docker-compose up -d
```
### Format project
```
yarn format
```
**Note:** if you want to deploy, you can use my Dockerfile to deploy with container to your host server. I successfully deployed to [Heroku](https://www.heroku.com/).
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
