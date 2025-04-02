# ✅ Checklist: Permisos, Usuarios y Redes

- [ ] Evitar ejecutar contenedores como root.
- [ ] Crear un usuario dedicado dentro del contenedor con `adduser` + `USER`.
- [ ] Aplicar `--read-only` para evitar escrituras innecesarias.
- [ ] Aplicar `--cap-drop=ALL` para eliminar capacidades peligrosas.
- [ ] Probar redes: `bridge` (por defecto), `host`, `none`.
- [ ] Usar `docker network inspect` para auditar la red.
- [ ] Evitar exponer puertos innecesarios al host.

✅ 2. Crear un usuario dedicado dentro del contenedor con adduser + USER
👉 Aunque ya lo aplicaste en user-nonroot-app y en el root-app lo convertiste también, vamos a reforzarlo y dejarlo completamente claro y aplicado

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

Crean un grupo y usuario sin permisos (-S = system).

Cambian el contexto de ejecución al nuevo usuario.
