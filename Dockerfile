# multi-stage build
FROM node:13-alpine AS nodebuilder

WORKDIR /app

COPY package.json tsconfig.json tsconfig.app.json tsconfig.spec.json tslint.json package-lock.json angular.json  browserslist /app/
COPY src/ /app/src/

RUN npm install -g @angular/cli && npm install && ng build

# final image
FROM nginx:1.15-alpine

RUN apk add --no-cache ca-certificates

COPY --from=nodebuilder --chown=nginx /app/dist/otaku4k /usr/share/nginx/html
