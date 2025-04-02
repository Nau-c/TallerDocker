const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const baseDir = process.cwd();

const apps = [
  {
    name: 'insecure-app',
    dockerfile: `FROM node:latest

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]`,
  },
  {
    name: 'secure-app',
    dockerfile: `FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY app.js .

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000

CMD ["node", "app.js"]`,
  },
];

const appJs = `const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola desde la app en Docker 🐳");
});

app.listen(3000, () => {
  console.log("App escuchando en puerto 3000");
});
`;

const packageJson = {
  name: 'docker-sec101-app',
  version: '1.0.0',
  description: 'App sencilla para el taller de seguridad en Docker',
  main: 'app.js',
  scripts: {
    start: 'node app.js',
  },
  dependencies: {
    express: '^4.18.4',
  },
};

apps.forEach((app) => {
  const appPath = path.join(baseDir, app.name);
  if (!fs.existsSync(appPath)) {
    fs.mkdirSync(appPath);
    console.log(`📁 Carpeta creada: ${app.name}`);
  }

  // Crear app.js
  fs.writeFileSync(path.join(appPath, 'app.js'), appJs);

  // Crear Dockerfile
  fs.writeFileSync(path.join(appPath, 'Dockerfile'), app.dockerfile);

  // Crear package.json
  fs.writeFileSync(
    path.join(appPath, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );

  // Ejecutar npm install
  try {
    console.log(`📦 Instalando dependencias en ${app.name}...`);
    execSync('npm install', { cwd: appPath, stdio: 'inherit' });
  } catch (err) {
    console.error(`❌ Error al instalar en ${app.name}:`, err.message);
  }
});
