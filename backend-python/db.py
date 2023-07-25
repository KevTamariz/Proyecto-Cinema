import mysql.connector

# Configuracion de la conexion a la base de datos
db_config = {
    "host": "35.184.44.133",
    "user": "admin",
    "passwd": "@cinemaplus1010",
    "database": "cinemaplus"
}

# Establecer conexion a la base de datos
connetion = mysql.connector.connect(**db_config)

# Objeto cursos para ejecutar consultar
cursor = connetion.cursor()


