# Graph Cinema

![GitHub](https://img.shields.io/github/license/jeffersonaguilar95/graphql-cinema)
![GitHub repo dependencies](https://img.shields.io/david/jeffersonaguilar95/graphql-cinema)
![GitHub repo size](https://img.shields.io/github/repo-size/jeffersonaguilar95/graphql-cinema)
![GitHub contributors](https://img.shields.io/github/contributors/jeffersonaguilar95/graphql-cinema)
![GitHub stars](https://img.shields.io/github/stars/jeffersonaguilar95/graphql-cinema?style=social)
![GitHub forks](https://img.shields.io/github/forks/jeffersonaguilar95/graphql-cinema?style=social)

Graph Cinema is a `GraphQL server` built with Apollo Server that allows `create and list` resources such as `movies,actors,directors,genres` for educational purposes.

The point of this is just show some of my backend skills, implementing an awesome tech stack that you will se below. 

[Live Demo (GraphQL Playground)](http://ec2-52-54-247-163.compute-1.amazonaws.com:4000)

## Tech stack

- [Node.js](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Graphql](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Mongo DB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)

## Prerequisites

Before you begin, ensure you have installed the following dependencies:

* `nodejs@latest`
* `docker/engine@latest` 
* `docker-compose@latest`

## Installing graph-cinema

To install graph-cinema, follow these steps:

```shell script
$ npm install

$ cp env.example .env
```
By default, the .env file has the redis and mongodb credentials to connect to the docker containers.

## Run graph-cinema server

To run graph-cinema server, follow these steps:

##### On development environment

```shell script
$ npm run start:dev
```
This command will start the docker images for mongoDB and redis, 
after that will run the graphQL on dev mode with nodemon on http://localhost:4000

##### On production environment

```shell script
$ npm run dkr:start
```
This command will create a docker container with the graphql server built,
 it will also create docker containers for mongoDB and redis.
 
## Contact

If you want to reach me out, please visit my [website](https://jeffersonaguilar95.github.io/), and you will find my contact information.

## License

This project uses the following license: [MIT](https://opensource.org/licenses/MIT).
