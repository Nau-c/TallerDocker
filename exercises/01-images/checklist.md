# ✅ Checklist: Buenas prácticas al construir imágenes Docker

- [x] Usar imágenes base mínimas (`node:alpine`, `debian:slim`, etc).
- [x] Fijar versiones específicas (`node:18-alpine`, evitar `latest`).
- [x] No instalar herramientas innecesarias.
- [x] Usar archivos `.dockerignore` si hay muchos ficheros locales.
- [x] Evitar copiar archivos secretos (ej: `.env`, `.git`, claves SSH).
- [x] Evitar ejecutar como root (crear usuario y usar `USER`).
- [x] Reducir el número de capas (`RUN`, `COPY`, etc).
- [x] Usar `npm install --omit=dev` o similar para producción.
- [x] Minimizar el tamaño final de la imagen.
- [x] Analizar vulnerabilidades con `docker scan`, `trivy` o `clair`.
