from flask import Flask, jsonify, request
import db

app = Flask(__name__)


@app.route('/')
def index():
    return 'Hello world'


# Ruta para mostrar todas las proyecciones de una sucursal por su ID
@app.route('/sucursales/<int:sucursal_id>/proyecciones', methods=['GET'])
def get_proyecciones_by_sucursal_id(sucursal_id):
    db.cursor.execute("SELECT * FROM Proyeccion WHERE sucursal_id = %s", (sucursal_id,))
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
    

# Ruta para ver que asientos estan ocupados dependiendo la sala
@app.route('/salas/<int:sala_id>/asientos_ocupados', methods=['GET'])
def get_asientos_ocupados_by_sala_id(sala_id):
    db.cursor.execute("SELECT id_asciento FROM Asiento WHERE sala_id = %s AND ocupado = TRUE", (sala_id,))
    asientos_ocupados = [asiento[0] for asiento in db.cursor.fetchall()]  # Convertir a lista de números de asiento

    return jsonify(asientos_ocupados)
    

# Ruta para comprar un boleto
@app.route('/comprar_boleto', methods=['POST'])
def comprar_boleto():
    data = request.get_json()
    cliente_id = data.get('cliente_id')
    proyeccion_id = data.get('proyeccion_id')

    if not cliente_id or not proyeccion_id:
        return jsonify({'message': 'Cliente y proyección son campos requeridos'}), 400

    # Obtener el precio de la proyección (suponiendo que está almacenado en la tabla 'Proyeccion')
    db.cursor.execute("SELECT precio FROM Proyeccion WHERE id_proyeccion = %s", (proyeccion_id,))
    proyeccion_precio = db.cursor.fetchone()

    if not proyeccion_precio:
        return jsonify({'message': 'Proyección no encontrada'}), 404

    # Insertar el nuevo boleto en la tabla 'Boleto'
    db.cursor.execute("INSERT INTO Boleto (precio, sucursal_id, cliente_id, proyeccion_id) VALUES (%s, %s, %s, %s)",
                   (proyeccion_precio[0], 1, cliente_id, proyeccion_id))  # Suponiendo sucursal_id = 1
    db.connection.commit()
    db.cursor.close()
    db.connection.close()

    return jsonify({'message': 'Boleto comprado exitosamente'}), 201


if __name__ == "__main__":
    app.run(debug=True)
