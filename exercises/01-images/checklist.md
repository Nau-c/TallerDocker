# ✅ Checklist: Buenas prácticas al construir imágenes Docker

- [x] Usar imágenes base mínimas (`node:alpine`, `debian:slim`, etc).
- [ ] Fijar versiones específicas (`node:18-alpine`, evitar `latest`).
- [ ] No instalar herramientas innecesarias.
- [ ] Usar archivos `.dockerignore` si hay muchos ficheros locales.
- [ ] Evitar copiar archivos secretos (ej: `.env`, `.git`, claves SSH).
- [ ] Evitar ejecutar como root (crear usuario y usar `USER`).
- [ ] Reducir el número de capas (`RUN`, `COPY`, etc).
- [ ] Usar `npm install --omit=dev` o similar para producción.
- [ ] Minimizar el tamaño final de la imagen.
- [ ] Analizar vulnerabilidades con `docker scan`, `trivy` o `clair`.
