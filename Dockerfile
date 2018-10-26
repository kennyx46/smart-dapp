FROM node:latest

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN yarn

RUN yarn global add serve

COPY . /usr/src/app

RUN yarn build

EXPOSE 5000

CMD ["serve", "-s", "build"]