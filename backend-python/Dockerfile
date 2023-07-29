# Usa una imagen de Python como base
FROM python:3.10

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos necesarios (app.py y requirements.txt) al contenedor
COPY requirements.txt requirements.txt

# Instala las dependencias necesarias
RUN pip3 install --no-cache-dir -r requirements.txt

# Copia los archivos del proyecto en la ruta de trabajo
COPY . . /usr/src/app/

# Expone el puerto en el que tu aplicación Flask escucha (ajústalo según tus necesidades)
EXPOSE 5000

# Comando para ejecutar la aplicación Flask 
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]