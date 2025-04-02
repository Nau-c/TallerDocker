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
