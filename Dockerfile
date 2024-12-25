# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) before other files
# Leverage Docker cache to save time on dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Building app
RUN npm run build

# Start a new (prod) stage from a smaller image
FROM node:18-alpine
WORKDIR /usr/src/app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --from=build /usr/src/app/dist ./dist
COPY package*.json ./
RUN npm install --only=production
RUN rm package*.json

# Expose the port that your NestJS app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["node", "dist/main.js"]