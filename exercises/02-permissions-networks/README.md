# 🔐 Módulo 2 – Permisos, Usuarios y Redes en Docker

En este ejercicio exploraremos las diferencias entre ejecutar contenedores como `root` vs. como usuario sin privilegios, y cómo Docker maneja las redes por defecto.

---

## 🎯 Objetivos

- Analizar riesgos de seguridad al ejecutar contenedores como root.
- Crear un usuario limitado dentro del contenedor y usar `USER`.
- Probar flags como `--read-only` y `--cap-drop`.
- Observar la configuración de redes Docker (`bridge`, `host`, `none`).

---

## 📦 Estructura

. ├── user-root-app/ # App corriendo como root (inseguro) ├── user-nonroot-app/ # App corriendo como usuario limitado ├── docker-compose.yaml # Composición de red para pruebas ├── checklist.md # Buenas prácticas └── README.md

## 🧪 Instrucciones

### 🐳 Ejecutar como root (inseguro)

```bash
docker build -t root-app ./user-root-app
docker run -p 4000:3000 root-app


📦 Para arrancar:
cd exercises/02-permissions-networks
npm install --prefix user-root-app
npm install --prefix user-nonroot-app
docker compose up --build


```
