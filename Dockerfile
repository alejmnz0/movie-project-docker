FROM node:18.10.0-alpine as builder
LABEL stage=builder
WORKDIR /app/
COPY . /app/
RUN npm i && npm run buildProd

FROM nginx
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /dist ./dist/
RUN npm ci --only=production

ENTRYPOINT [ "npm" ]
CMD [ "run", "start:prod" ]
EXPOSE 3000