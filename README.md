# Getting Started with cdklocal

This repository serves as a playground to get started with [cdklocal](https://github.com/localstack/aws-cdk-local).

# Getting Started

This repo is based on simple example shown below.

![Simple Infrastructure](/docs/example-simple-infra.png)

To get started,

- Clone this repo.
- Install package dependencies

```
npm i
```

- Run Localstack in a container.

```
docker compose up
```

- For the first time, run cdk bootstrap

```
npm run cdk:local bootstrap --custom-permissions-boundary localstack-development-policy
```

- Deploy your resources into Localstack

```
npm run deploy:local
```

If everything works, you should have your resources deployed to Localstack container.

Run these commands to verify the resources

```
aws s3 --endpoint-url http://localhost:4566 ls
aws dynamodb --endpoint-url http://localhost:4566 list-tables
```

## Updating your CDK App

If you'd like to test other resources, you can modify [getting-started-with-cdklocal-stack.ts](./lib/getting-started-with-cdklocal-stack.ts). Then, run `npm run deploy:local`
