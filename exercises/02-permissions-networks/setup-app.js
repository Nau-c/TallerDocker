const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const baseDir = process.cwd();

const commonAppJs = `const express = require("express");
const os = require("os");
const app = express();

app.get("/", (req, res) => {
  res.send(\`Ejecutando como: \${os.userInfo().username}\`);
});

app.listen(3000, () => {
  console.log("App escuchando en el puerto 3000");
});
`;

const packageJson = {
    name: "docker-sec101-app",
    version: "1.0.0",
    main: "app.js",
    scripts: {
        start: "node app.js",
    },
    dependencies: {
        express: "^4.18.4",
    },
};

const apps = [
    {
        name: "user-root-app",
        dockerfile: `FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY app.js .

EXPOSE 3000

CMD ["node", "app.js"]`,
    },
    {
        name: "user-nonroot-app",
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

apps.forEach(({ name, dockerfile }) => {
    const appPath = path.join(baseDir, name);
    if (!fs.existsSync(appPath)) {
        fs.mkdirSync(appPath);
        console.log(`📁 Carpeta creada: ${name}`);
    }

    fs.writeFileSync(path.join(appPath, 'app.js'), commonAppJs);
    fs.writeFileSync(
        path.join(appPath, 'package.json'),
        JSON.stringify(packageJson, null, 2)
    );
    fs.writeFileSync(path.join(appPath, 'Dockerfile'), dockerfile);

    try {
        console.log(`📦 Instalando dependencias en ${name}...`);
        execSync('npm install', { cwd: appPath, stdio: 'inherit' });
    } catch (err) {
        console.error(`❌ Error al instalar en ${name}:`, err.message);
    }
});
