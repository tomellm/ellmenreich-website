# syntax=docker/dockerfile:1

# Build the Eleventy website
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG SITE_URL=http://localhost:8080
ENV SITE_URL=${SITE_URL}

RUN npm run build


# Serve the generated static files
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/_site/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
