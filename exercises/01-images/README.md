# 🐳 Módulo 1 – Construcción de Imágenes: Seguras vs Inseguras

Este ejercicio tiene como objetivo comparar una imagen Docker construida de forma insegura con otra siguiendo buenas prácticas de seguridad.

---

## 🎯 Objetivos

- Identificar malas prácticas en Dockerfiles.
- Mejorar la construcción de imágenes con técnicas seguras.
- Ver en acción el impacto de las decisiones al crear imágenes.

---

## 🛠️ Instrucciones

1. Revisa el código fuente de ambas aplicaciones (`insecure-app` y `secure-app`).
2. Analiza los Dockerfiles.
3. Construye y ejecuta ambas imágenes:

   ```bash
   docker build -t insecure-app ./insecure-app
   docker run -p 3000:3000 insecure-app

   docker build -t secure-app ./secure-app
   docker run -p 3001:3000 secure-app
   ```
