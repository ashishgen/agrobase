# ---------- Stage 1: Build the React app ----------
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the React app
RUN npm run build


# ---------- Stage 2: Serve with Apache ----------
FROM ubuntu:latest

# Install Apache
RUN apt-get update && \
    apt-get install -y apache2 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Fix Apache warning
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Enable Apache rewrite module (important for React routing)
RUN a2enmod rewrite

# Copy React build output to Apache root
COPY --from=build /app/build /var/www/html/

# Configure Apache to support React Router
RUN printf '<VirtualHost *:80>\n\
    DocumentRoot /var/www/html\n\
    <Directory /var/www/html>\n\
        AllowOverride All\n\
        Require all granted\n\
    </Directory>\n\
</VirtualHost>' > /etc/apache2/sites-available/000-default.conf

# Expose HTTP port
EXPOSE 80

# Run Apache in foreground
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
