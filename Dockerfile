FROM node:16-alpine as builder

WORKDIR /app
COPY package.json .
EXPOSE 3000
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html

