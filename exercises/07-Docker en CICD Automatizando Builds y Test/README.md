⚙️ Módulo 07 – Docker en CI/CD: Automatizando Builds y Tests 🛠️🚀
🎯 Objetivo:
Aprender cómo integrar Docker en un flujo de integración continua (CI) para:

Construir imágenes automáticamente,

Lanzar tests,

Y preparar despliegues automatizados.

📚 Contenidos:
1. 🤖 ¿Qué es CI/CD?
CI (Integración Continua): ejecutar tests automáticamente al subir cambios.

CD (Entrega/Despliegue Continua): automatizar el empaquetado y despliegue.

2. 🐳 Docker en CI/CD
Docker ayuda a:

Garantizar entornos de build consistentes.

Empaquetar y distribuir apps fácilmente.

Usar contenedores efímeros para ejecutar tests aislados.

// Ejecutar los tests
docker compose run --rm app pytest tests/
docker compose up --watch
