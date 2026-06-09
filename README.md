Backend de News Explorer

API de backend para la aplicación News Explorer.

Funciones
Registro de usuarios
Autenticación de usuarios con JWT
Cifrado de contraseñas con bcryptjs
Rutas protegidas
Guardar artículos
Eliminar artículos guardados
Base de datos MongoDB Atlas
Implementación HTTPS con Nginx y Let's Encrypt
Registro de actividad con Winston
Validación de solicitudes con Celebrate/Joi
Limitación de velocidad
Encabezados de seguridad Helmet
Tecnologías
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT
bcryptjs
Celebrate/Joi
Winston
PM2
Nginx
Instalación

Clonar el repositorio:

git clone https://github.com/Gerar2309dfm/news-explorer-backend.git

Instalar dependencias:

npm install

Crear archivo .env Archivo:

NODE_ENV=development
JWT_SECRET=dev-secret-key
MONGO_URI=mongodb://127.0.0.1:27017/newsdb

Iniciar servidor:

npm run start

Modo desarrollo:

npm run dev

Análisis de código:

npm run lint
URL de la API

https://news-explorer-api.duckdns.org

Puntos finales
Autenticación

POST /signup

POST /signin

Usuarios

GET /users/me

Artículos

GET /articles

POST /articles

DELETE /articles/

Autor

Gerardo David Fernández Martínez
