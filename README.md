# ProyectoPongTP2

Backend para un videojuego Pong en versión moderna.

* Acosta Luis
* Grün Florencia
* Ruiz Agustin
* Sanchez Matias

Para ejecutar correctamente el proyecto, se debe crear el archivo .env en la raíz del proyecto con las siguientes variables de entorno:

```sh
PORT # El puerto en el que se ejecutará el servidor
# MODO_PERSISTENCIA # El modo de persistencia puede ser MEM, FILE o DB (Desactivado)
JWT_SECRET # La clave secreta para firmar los JWT
JWT_REFRESH_SECRET # La clave secreta para firmar los refresh tokens
JWT_TEST_ID # El ID de usuario para pruebas
JWT_TEST_USERNAME # El nombre de usuario para pruebas
JWT_TEST_PASSWORD # La contraseña para pruebas
STRCNX # La cadena de conexión a la base de datos, si se utiliza MODO_PERSISTENCIA DB
BASE # El nombre de la base de datos, si se utiliza MODO_PERSISTENCIA DB
```
