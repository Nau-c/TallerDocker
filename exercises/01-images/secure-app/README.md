🧱 Paso 1: Editar el Dockerfile de secure-app

execise/01-images/secure-app/Dockerfile

Asegura que el Dockerfile cumple con las siguientes buenas prácticas:

- Usa una imagen base mínima.
- Fija versiones específicas de las herramientas.
- No instala herramientas innecesarias.

La primera linea es FROM node:18-alpine.

Si tenemos un FROM node:latest, reemplazaremos por FROM node:18-alpine.

🧱 Paso 2: Construir la imagen

docker build -t secure-app .
docker image rm secure-app

Limpiar imagenes antiguas (Opcional)

docker image prune -a -f

🧱 Paso 3: Ejecutar la imagen

cd execise/01-images/secure-app

🧱 Paso 4: Verificar la aplicación

docker build -t secure-app ./secure-app

🧱 Paso 5: verificar el tamaño de la imagen.

docker images | findstr secure-app

🧱Paso 6: Analizar vulnerabilidades con docker scan.

docker scan secure-app

✅ 2. Fijar versiones específicas (evitar latest)
Has usado:

dockerfile
Copiar
Editar
FROM node:18-alpine

En el dockerFile esto evita que instalen herramientas innecesarias.

🧱 Paso 1: Editar el Dockerfile de secure-app

Editar el Dockerfile de secure-app para que use npm install --omit=dev en lugar de npm install.

RUN npm install --omit=dev

✅ ¡Perfecto! Has marcado como hecho el "Reducir el número de capas (RUN, COPY, etc)", lo cual es una excelente práctica para optimizar tus Dockerfile.

🧠 Tip rápido para futuros Dockerfile:
En lugar de esto:

RUN apt-get update
RUN apt-get install -y curl
COPY package.json .
COPY . .

Evitar esto

RUN apt-get update
RUN apt-get install -y curl
COPY package.json .
COPY . .

💡 ¿Por qué evitar repetir RUN muchas veces en un Dockerfile?
Cada instrucción RUN, COPY, ADD, etc., crea una nueva capa (layer) en la imagen de Docker. Y esto tiene algunas consecuencias importantes:

🧹 3. Menor control sobre limpieza
Cuando usas varios RUN, no puedes limpiar cosas intermedias eficientemente. En cambio, si haces todo en un solo RUN, puedes hacer:

dockerfile
Copiar
Editar
RUN apt-get update && apt-get install -y \
 curl \
 git && \
 rm -rf /var/lib/apt/lists/\*
Esto instala y limpia en la misma capa, lo cual reduce mucho el tamaño final.

🧰 1. Usa imágenes base ligeras
🔹 Evita:

Dockerfile
Copiar
Editar
FROM ubuntu:latest
✅ Usa mejor:

Dockerfile
Copiar
Editar
FROM node:20-alpine
Las imágenes alpine son súper ligeras (~5 MB) y funcionan genial para producción.

2. Limpia los paquetes temporales
   Dentro de un RUN, borra los archivos que ya no necesitas:

Dockerfile
Copiar
Editar
RUN apt-get update && apt-get install -y curl \
 && rm -rf /var/lib/apt/lists/\*

3.  Agrupa instrucciones RUN, COPY, etc.
    Cada instrucción crea una capa. Si puedes agruparlas, reduces el número de capas y el tamaño:

Dockerfile
Copiar
Editar
RUN npm install && npm cache clean --force

🐳 5. Usa multi-stage builds (✨ clave)
Ejemplo: compilas en una etapa, y solo copias lo necesario a la imagen final:

Dockerfile
Copiar
Editar

# Etapa de build

FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Etapa de producción

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/index.js"]

Esto evita copiar dependencias o archivos que solo se usan para compilar.

🔍 Ver vulnerabilidades específicas: Puedes ver el detalle con:

docker scout cves local://insecure-app:latest

💡 Ver sugerencias de actualización:

docker scout recommendations local://insecure-app:latest
