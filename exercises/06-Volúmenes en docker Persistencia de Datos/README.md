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

3. 🔧 Comandos útiles

# Crear volumen
docker volume create mydata

# Ver volúmenes
docker volume ls

# Inspeccionar un volumen
docker volume inspect mydata

# Eliminar volumen
docker volume rm mydata


🧠 Preguntas para el taller
¿Qué diferencia hay entre un volumen y un bind mount?

¿Dónde se guardan los volúmenes en el host?

¿Cómo respaldar un volumen?

🧠 Preguntas para el taller:
¿Qué diferencia hay entre volumen y bind mount?

¿Dónde están físicamente los datos en tu máquina?

¿Cómo podrías respaldar ese volumen?