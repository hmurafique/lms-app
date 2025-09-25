# Base image
FROM node:18-alpine

# Working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source
COPY . .

# Expose port
EXPOSE 4001

# Start app
CMD ["npm", "start"]
