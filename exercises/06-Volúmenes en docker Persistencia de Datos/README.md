🎯 Objetivo:

Entender como manejar la la pesistencia de dato en contenedores Docker usando volúmenes. Aprenderemos a crear, montar y gestionar  volumenes para que los datos no se pierdan al eliminar o reiniciar un contenedor.

## Instrucciones

1. Crea una red bridge personalizada llamada `mi_red` usando el comando `docker network create`.

Contenidos:

- Los contenedores son efímeros 🫥

- Los datos se pierden al eliminar un contenedor (si no usamos volúmenes)

- Volúmenes permiten que los datos persistan entre ejecuciones

2. 📦 Tipos de volúmenes

| Tipo de Volumen   | Uso común |
|-------------------|-----------|
| Named Volumes     | Bases de datos, almacenamiento persistente a largo plazo |
| Bind Mounts       | Desarrollo local, compartir archivos entre host y contenedor |
| tmpfs mounts      | Datos temporales, información sensible (solo Linux) |
| Anonymous Volumes | Datos de aplicación que no necesitan persistir entre contenedores |
