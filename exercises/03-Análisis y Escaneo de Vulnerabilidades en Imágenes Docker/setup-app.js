const express = require("express")
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

const baseDir = process.cwd()
const appName = "test-app"
const appPath = path.join(baseDir, appName)

const appJs = `const express = require("express")`
const app = express();

app.get("/", (req, res) => {
    res.send("App para escaneo de vulnerabilidades")
})

app.listen(3000, () => {
    console.log("App escuchando en el puerto 3000")
})

const packageJson = {
    name: "test-vuln-app",
    version: "1.0.0",
    main: "app.js",
    scripts: {
        start: "node app.js",
    },
    dependencies: {
        express: "4.17.1" // Versión vulnerable
    }
};

const dockerfile = `# Imagen vulnerable
FROM node:16

WORKDIR /app

copy package*.json ./
RUN npm install

COPY app.js .

EXPOSE 3000

CMD ["node", "app.js"]
`;

if (!fs.existsSync(appPath)) {
    fs.mkdirSync(appPath);
    console.log(`📁 Carpeta creada: ${appName}`);
}

fs.writeFileSync(path.join(appPath, "app.js"), appJs);
fs.writeFileSync(path.join(appPath, "package.json"), JSON.stringify(packageJson, null, 2));
fs.writeFileSync(path.join(appPath, "Dockerfile"), dockerfile);

// instalar dependencias
try {
    execSync("npm install", { cwd: appPath, stdio: "inherit" });
    console.log("📦 Dependencias instaladas");
} catch (error) {
    console.error(`❌ Error al instalar dependencias: ${error.message}`);
    //` ;
}




