# Usa una imagen de Python como base
FROM python:3.10

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos necesarios (app.py y requirements.txt) al contenedor
COPY app.py .
COPY requirements.txt .

# Instala las dependencias necesarias
RUN pip install --no-cache-dir -r requirements.txt

# Expone el puerto en el que tu aplicación Flask escucha (ajústalo según tus necesidades)
EXPOSE 5000

# Comando para ejecutar la aplicación Flask (ajusta "app.py" al nombre de tu archivo principal)
CMD ["python", "app.py"]