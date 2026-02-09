# ---------- Stage 1: Build the React app ----------
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---------- Stage 2: Serve with Nginx ----------
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# CHANGED THIS LINE: Vite outputs to 'dist', not 'build'
COPY --from=build /app/dist /usr/share/nginx/html

# Support React Router
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
