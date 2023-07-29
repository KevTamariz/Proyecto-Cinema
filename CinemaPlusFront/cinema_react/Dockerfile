# Node image
FROM node:current-alpine 

#  Crear carpeta de trabajo
RUN mkdir -p /usr/src/app

# Definir ruta de trabajo
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

EXPOSE 3000

CMD ["npm", "start"]