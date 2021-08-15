FROM node:14.17.4-alpine
RUN apk --no-cache add \
    gettext \
    bash
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --check-files --production=true
COPY www ./www
COPY template ./template
COPY env.js ./
COPY app.js ./
COPY ./entrypoint.sh /
RUN chmod +x /entrypoint.sh
EXPOSE 3000
ENTRYPOINT ["/entrypoint.sh"]
CMD [ "node", "app.js" ]

