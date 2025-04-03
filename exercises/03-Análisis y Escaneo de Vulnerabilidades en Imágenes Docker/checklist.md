## ✅ Checklist: Servir HTML con NGINX

- [x] Crear un `index.html` con contenido personalizado.
- [x] Crear un `Dockerfile` que use `nginx:alpine` como base.
- [x] Copiar el HTML al directorio de NGINX (`/usr/share/nginx/html`).
- [x] Construir la imagen con `docker build -t nginx-static-html .`.
- [x] Ejecutar el contenedor con `docker run -d -p 4321:80 nginx-static-html`.
- [x] Acceder desde el navegador a `http://localhost:4321` y verificar que funciona.
