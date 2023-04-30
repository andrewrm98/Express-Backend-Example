# Stage 1: Build
FROM node:18.15.0-alpine AS build
WORKDIR /app
EXPOSE 8088

# Step 2: Install modules
COPY package.json ./
RUN npm install --no-fund --loglevel=error

# Step 3: Copy app files
COPY . .

# Step 4: run
CMD ["npm", "run", "start"]