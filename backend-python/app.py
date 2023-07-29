from flask import Flask, jsonify
import db

app = Flask(__name__)


@app.route('/')
def index():
    return 'Hola mundo'


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
