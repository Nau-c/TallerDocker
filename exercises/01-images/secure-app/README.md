🧱 Paso 1: Editar el Dockerfile de secure-app

execise/01-images/secure-app/Dockerfile

Asegura que el Dockerfile cumple con las siguientes buenas prácticas:

- Usa una imagen base mínima.
- Fija versiones específicas de las herramientas.
- No instala herramientas innecesarias.

La primera linea es FROM node:18-alpine.

🧱 Paso 2: Construir la imagen

docker build -t secure-app .
