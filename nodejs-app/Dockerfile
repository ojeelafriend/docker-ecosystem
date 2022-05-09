FROM node:18-alpine3.14

RUN mkdir -p /var/nodejs-app/   
WORKDIR /var/nodejs-app/

COPY package*.json ./
RUN npm install

COPY ./src/ ./src/

EXPOSE 3000
CMD ["npm", "start"]