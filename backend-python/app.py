from flask import Flask, jsonify, request
import db

app = Flask(__name__)


@app.route('/')
def index():
    return 'Hello world'


@app.route('/sucursales/1/proyecciones', methods=['GET'])
def get_proyecciones_sucursal1():
    db.cursor.execute("SELECT p.id_proyeccion, p.horario, p.dia, p.pelicula_id FROM Proyeccion p JOIN Sala s ON p.sala_id = s.id_sala WHERE s.sucursal_id = 1")
    proyecciones = db.cursor.fetchall()

    if proyecciones:
        # Convertir objetos timedelta a cadenas de texto
        proyecciones_converted = []
        for proyeccion in proyecciones:
            proyeccion['horario'] = str(proyeccion['horario'])
            proyecciones_converted.append(proyeccion)
        return jsonify(proyecciones_converted)
    else:
        return jsonify({'message': 'No hay proyecciones para la sucursal especificada'}), 404
    

# Ruta para ver qué asientos están ocupados dependiendo de la sala
@app.route('/salas/<int:sala_id>/asientos_ocupados', methods=['GET'])
def get_asientos_ocupados_by_sala_id(sala_id):
    db.cursor.execute("SELECT id_asiento FROM Asiento WHERE sala_id = %s AND ocupado = TRUE", (sala_id,))
    asientos_ocupados = [asiento[0] for asiento in db.cursor.fetchall()]  # Convertir a lista de números de asiento

    return jsonify(asientos_ocupados)


# Ruta para registrar un nuevo usuario
@app.route('/registrar_usuario', methods=['POST'])
def registrar_usuario():
    data = request.get_json()
    nombre = data.get('nombre')
    correo = data.get('correo')
    numero_tarjeta = data.get('numero_tarjeta')
    pin_tarjeta = data.get('pin_tarjeta')

    if not all([nombre, correo, numero_tarjeta, pin_tarjeta]):
        return jsonify({'message': 'Todos los campos son requeridos'}), 400

    # Insertar el nuevo usuario en la tabla 'Cliente'
    db.cursor.execute("INSERT INTO Cliente (nombre, correo, numero_tarjeta, pin_tarjeta) VALUES (%s, %s, %s, %s)",
                      (nombre, correo, numero_tarjeta, pin_tarjeta))
    db.connection.commit()

    # Obtener el ID del usuario recién insertado
    usuario_id = db.cursor.lastrowid

    db.cursor.close()
    db.connection.close()

    return jsonify({'message': 'Usuario registrado exitosamente', 'usuario_id': usuario_id}), 201


# Ruta para comprar un boleto
@app.route('/comprar_boleto', methods=['POST'])
def comprar_boleto():
    data = request.get_json()
    cliente_correo = data.get('correo')
    cliente_numero_tarjeta = data.get('numero_tarjeta')
    proyeccion_id = data.get('proyeccion_id')
    asiento_id = data.get('asiento_id')

    if not all([cliente_correo, cliente_numero_tarjeta, proyeccion_id, asiento_id]):
        return jsonify({'message': 'Todos los campos son requeridos'}), 400

    # Verificar si la proyección existe
    db.cursor.execute("SELECT precio FROM Proyeccion WHERE id_proyeccion = %s", (proyeccion_id,))
    proyeccion_precio = db.cursor.fetchone()

    if not proyeccion_precio:
        return jsonify({'message': 'Proyección no encontrada'}), 404

    # Verificar si el asiento está ocupado
    db.cursor.execute("SELECT ocupado FROM Asiento WHERE id_asiento = %s", (asiento_id,))
    asiento_ocupado = db.cursor.fetchone()

    if not asiento_ocupado:
        return jsonify({'message': 'Asiento no encontrado'}), 404

    if asiento_ocupado[0]:
        return jsonify({'message': 'El asiento está ocupado'}), 400

    # Buscar al cliente en la tabla 'Cliente' por correo y número de tarjeta
    db.cursor.execute("SELECT id_cliente FROM Cliente WHERE correo = %s AND numero_tarjeta = %s",
                      (cliente_correo, cliente_numero_tarjeta))
    cliente_id = db.cursor.fetchone()

    if not cliente_id:
        return jsonify({'message': 'Cliente no encontrado. Regístrese antes de comprar un boleto'}), 404

    # Insertar el nuevo boleto en la tabla 'Boleto'
    db.cursor.execute("INSERT INTO Boleto (precio, proyeccion_id, asiento_id, cliente_id) VALUES (%s, %s, %s, %s)",
                   (proyeccion_precio[0], proyeccion_id, asiento_id, cliente_id[0]))
    db.connection.commit()

    # Actualizar el estado del asiento a ocupado
    db.cursor.execute("UPDATE Asiento SET ocupado = TRUE WHERE id_asiento = %s", (asiento_id,))
    db.connection.commit()

    db.cursor.close()
    db.connection.close()

    return jsonify({'message': 'Boleto comprado exitosamente'}), 201


if __name__ == "__main__":
    app.run(debug=True)
