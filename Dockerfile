FROM node:7-alpine

WORKDIR /tmp
COPY package.json /tmp/
RUN yarn install

RUN mkdir -p /code
RUN cp -a /tmp/node_modules /code/node_modules

WORKDIR /code
COPY . /code

ARG PORT
ARG NODE_ENV

ENV NODE_ENV $NODE_ENV
ENV PORT $PORT

CMD [ "yarn", "start" ]

EXPOSE $PORT
