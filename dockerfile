# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Instala ping
#RUN apt-get install -y iputils-ping

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer el puerto que el servidor web utilizará
EXPOSE 3000

# Construir la aplicación para desarrollo
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
