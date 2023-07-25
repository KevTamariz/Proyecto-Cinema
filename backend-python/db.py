import mysql.connector

def connectionBD():
    mydb = mysql.connector.connect(
        host ="35.184.44.133",
        user ="admin",
        passwd ="@cinemaplus1010",
        database = "cinemaplus"
        )
    if mydb:
        print ("Conexion exitosa a BD")
        return mydb
    else:
        print("Error en la conexion a BD")