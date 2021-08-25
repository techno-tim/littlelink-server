FROM node:14.17.4-alpine AS node-build
RUN apk --no-cache add \
    gettext \
    bash

WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY src ./src
COPY public ./public
RUN yarn install --frozen-lockfile --check-files
RUN yarn build --noninteractive
RUN yarn install --frozen-lockfile --check-files --production --modules-folder node_modules_prod

FROM node:14.17.4-alpine
WORKDIR /usr/src/app
ENV NODE_ENV production
RUN mkdir -p /node_modules
COPY --from=node-build /usr/src/app/build ./build
COPY --from=node-build /usr/src/app/node_modules_prod ./node_modules
EXPOSE 3000
CMD [ "node", "build/server.js" ]

