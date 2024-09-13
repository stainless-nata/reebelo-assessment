# Use Node.js as the base image
FROM node:21

# Set the working directory inside the container
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
