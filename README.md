## Description

This is a simple NestJS monorepo setup.

- **project-root/**
  - **apps**: Store different applications, including microservices or workers, which can reuse functionalities from the libraries defined in the libs/ directory.
    - **nestjs-boilerplate**: The main app handles business requirements as well as sends requests to other apps through messaging systems, WebSocket, and gRPC.
    - **microservice**: The secondary app handles requests sent through various messaging systems (NATS, MQTT, RabbitMQ, Kafka, etc.), as well as WebSocket and gRPC.
  - **libs**: Define functionalities that can be shared between applications.
    - **config**: Store all external configurations that are not related to business rules.
      - **app-cache**: Set up the cache layer using Redis.
      - **app-config**: Configure the NestJS Config Module using environment variables. To add more configurations, place them in the app-config/configs directory and update the `load` and `validationSchema` properties in the app-config/app-config.module.ts file.
      - **app-grpc**: Set up a gRPC client. The gRPC server is set up in the apps/microservice directory.
      - **app-i18n**: Set up multiple languages for use in the app.
      - **app-microservice**: Connect to different messaging systems and protocols (Redis, MQTT, TCP, NATS, RabbitMQ, Kafka).
      - **app-mongoose**: Set up Mongoose schemas and repositories.
      - **app-sequelize**: Set up Sequelize models and repositories.
      - **app-typeorm**: Set up TypeORM entities and repositories.
    - **use-case**: Store all business-related modules.
      - **auth**: Set up authentication using JWT and Passport.
      - **[author|editor|user]**: CRUD modules, with separate DTOs, controller, service for each method.
      - **exception**: Set up exception code for business-related errors, and custom http/all exception filter.
      - **microservice**: Send requests to all messaging systems (MQTT, NATS, RabbitMQ, etc.). The request style can be either request-response or event-based, according to NestJS.
      - **rest-api**: Define common DTOs, such as timestamps, exception code, pagination, etc

## Local development

```bash
# install
$ yarn install --frozen-lockfile

# setup external services with docker compose
$ docker compose up --build -d

# setup env
$ cp .env.example .env

# start main app
$ yarn start:dev

# start microservice app
$  yarn start:dev microservice
```

## Usage

- Postman: Visit http://localhost:3000
- Swagger: Visit http://localhost:3000/api
