import mysql.connector

# Configuracion de la conexion a la base de datos
db_config = {
    "host": "35.184.44.133",
    "user": "admin",
    "passwd": "@cinemaplus1010",
    "database": "cinemaplus2"
}

# Establecer conexion a la base de datos
connection = mysql.connector.connect(**db_config)

# Objeto cursos para ejecutar consultar
cursor = connection.cursor(dictionary=True)


