FROM alpine:latest as package-env
ADD . /app

WORKDIR /app

RUN apk add --no-cache --update bash npm curl tar
RUN npm run metawrite

FROM node:14-alpine as build-env
COPY --from=package-env /app /app

WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "yarn.lock", "./"]

RUN npm ci
RUN npm run build

FROM gcr.io/distroless/nodejs:14 AS run-env
ENV NODE_ENV production
COPY --from=build-env /app /app

EXPOSE 3000

WORKDIR /app
CMD ["build/index.js"]
