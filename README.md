# ![alt text](https://raw.githubusercontent.com/kien123456k/mini-vexere-Frontend/e320a483c54ed5f74a52cb4357aaa175e720555e/src/assets/images/logo.svg) Mini Vexere Backend
## What is Book Playlist?
The API for a mini website that show coach stations information and manage those stations by admin dashboard.

Here is [the Frontend](https://github.com/kien123456k/mini-vexere-frontend) that using this API.
## Technology
- Frontend
  - Vue - The Progressive JavaScript Framework
  - Bootstrap - UI Components
- Backend
  - Express - Server Core
  - Joi - Validation
  - Mongoose + Mongo - Database
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


# License & copyright

© Kirin Tran, FPT University TP.HCM
Licensed under the [MIT LICENSE](LICENSE).