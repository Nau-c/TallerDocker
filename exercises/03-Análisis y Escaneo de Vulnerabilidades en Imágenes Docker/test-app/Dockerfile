# Imagen vulnerable
FROM node:16-alpine

WORKDIR /app

copy package*.json ./
RUN npm install

COPY app.js .

EXPOSE 3000

CMD ["node", "app.js"]
