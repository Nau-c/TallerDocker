# 🐳 03 - Análisis y Escaneo de Vulnerabilidades en Imágenes Docker

En este ejercicio vamos a construir una imagen Docker basada en **NGINX** para servir un archivo **HTML estático**, y posteriormente analizaremos su seguridad utilizando herramientas de escaneo de vulnerabilidades.

---

## 📁 Archivos

- `Dockerfile`: Define la imagen basada en `nginx:alpine` y copia el archivo HTML.
- `index.html`: Archivo HTML que será servido por el contenedor.

---

## ⚙️ Instrucciones

1. Crear el archivo `index.html` con el contenido HTML que desees mostrar.
2. Crear un `Dockerfile` con el siguiente contenido:

   ```Dockerfile
   FROM nginx:alpine
   COPY index.html /usr/share/nginx/html/index.html
   ```

3. Construir la imagen:

   ```bash
   docker build -t nginx-static-html .
   ```

4. Ejecutar el contenedor:

   ```bash
   docker run -d -p 8080:80 nginx-static-html
   ```

5. Acceder a `http://localhost:8080` en el navegador y verificar que se muestra el HTML.

---

## ✅ Checklist: Servir HTML con NGINX

- [x] Crear un `index.html` con contenido personalizado.
- [x] Crear un `Dockerfile` que use `nginx:alpine` como base.
- [x] Copiar el HTML al directorio de NGINX (`/usr/share/nginx/html`).
- [ ] Construir la imagen con `docker build -t nginx-static-html .`.
- [ ] Ejecutar el contenedor con `docker run -d -p 8080:80 nginx-static-html`.
- [ ] Acceder desde el navegador a `http://localhost:8080` y verificar que funciona.

---

## 🔐 Análisis de Vulnerabilidades

Una vez construida y probada

Una vez construida y probada la imagen:

1. Instala alguna herramienta de escaneo, por ejemplo:

   - [Trivy](https://github.com/aquasecurity/trivy)
   - [Dockle](https://github.com/goodwithtech/dockle)
   - [Grype](https://github.com/anchore/grype)

2. Ejecuta un escaneo de la imagen:

   ```bash
   trivy image nginx-static-html
   ```

3. Analiza los resultados y propone mejoras si se detectan vulnerabilidades.

---

## 🧠 Extra (opcional)

- Montar un volumen para desarrollo en caliente.
- Añadir una hoja de estilos CSS.
- Personalizar la configuración de NGINX con un `nginx.conf`.
- Comparar los resultados de Trivy con Dockle o Grype.
