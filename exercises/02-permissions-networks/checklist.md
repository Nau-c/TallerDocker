# ✅ Checklist: Permisos, Usuarios y Redes

- [x] Evitar ejecutar contenedores como root.
- [x] Crear un usuario dedicado dentro del contenedor con `adduser` + `USER`.
- [x] Aplicar `--read-only` para evitar escrituras innecesarias.
- [x] Aplicar `--cap-drop=ALL` para eliminar capacidades peligrosas.
- [x] Probar redes: `bridge` (por defecto), `host`, `none`.
- [x] Usar `docker network inspect` para auditar la red.
- [x] Evitar exponer puertos innecesarios al host.

✅ 2. Crear un usuario dedicado dentro del contenedor con adduser + USER
👉 Aunque ya lo aplicaste en user-nonroot-app y en el root-app lo convertiste también, vamos a reforzarlo y dejarlo completamente claro y aplicado

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

Crean un grupo y usuario sin permisos (-S = system).

Cambian el contexto de ejecución al nuevo usuario.

Aplicar --read-only para evitar escrituras innecesarias
Se puede añadir al docker compose y a la CLI no al DockerFile
docker run --read-only -p 4001:3000 safe-app

Eliminar capacidades peligrosas con --cap-drop=ALL
docker run --cap-drop=ALL -p 4002:3000 safe-app

Probar redes: bridge (por defecto), host, none

🛡️ ¿Qué hace --cap-drop=ALL?
Por defecto, Docker da a los contenedores algunas capacidades del kernel (como cambiar hora, montar sistemas, enviar señales, etc).
Aunque no estés como root, estas capacidades pueden ser peligrosas.

--cap-drop=ALL elimina todas esas capacidades extra.

se puede aplicar a nivel de CLI o al docker compose
exercises/02-permissions-networks/docker-compose.yaml

ejemplo compose:
version: "3.8"

services:
safe-app:
build: ./user-nonroot-app
container_name: safe-app
ports: - "4001:3000"
read_only: true
cap_drop: - ALL

si quieres evitar exponer puertos
docker run safe-app

en el yml
evitar
ports: - "4001:3000"
haccer esto

- internal: true
