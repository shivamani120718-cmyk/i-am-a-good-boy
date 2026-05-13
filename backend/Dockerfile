FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install --production

# Copy source
COPY . .

EXPOSE 5000

CMD [ "node", "server.js" ]
