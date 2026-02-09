# ---------- Stage 1: Build the React app ----------
# Using alpine version of node to save space during build
FROM node:18-alpine AS build

WORKDIR /app

# Only copy package files first to leverage Docker cache
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---------- Stage 2: Serve with Nginx (Alpine) ----------
# Nginx Alpine is ~5MB compared to Ubuntu's 70MB+
FROM nginx:alpine

# Remove default static files
RUN rm -rf /usr/share/nginx/html/*

# Copy React build output to Nginx root
COPY --from=build /app/build /usr/share/nginx/html

# EXTREMELY IMPORTANT: Support React Router (fixes 404 on refresh)
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
