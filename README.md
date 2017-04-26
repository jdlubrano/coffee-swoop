# Coffee Swoop

## Getting Started

This application was meant to be developed using Docker.  Mainly because
I don't know Docker very well and needed a sandbox in which I could bang my
head against the wall.  The good news is that the application uses
[Webpack](https://webpack.js.org) and its hot code reloading features,
so the development flow is pretty painless.

Furthermore, this application was built using [yarn](https://yarnpkg.com)
and not _npm_. I figured, if I was going to endure the pain of learning of
Docker, why not add insult to injury and learn _yarn_, too?

### Running the Application

```
docker-compose build
docker-compose up
```

The application should run on localhost:8080.

## Lessons Learned (Sort of...)

- When installing a new yarn package, you need to delete
  the docker compose volumes in order to use it (apparently).
  `docker-compose rm` will do the trick.
