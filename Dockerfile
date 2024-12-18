# build stage
FROM node:lts-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install -f
COPY . .
RUN npm run build

# production stage
FROM nginx:1.25.5
COPY --from=builder /app/dist /usr/share/nginx/html/word-game
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]