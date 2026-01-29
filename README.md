# DevTask Tracker

## Descripción
Aplicación SPA para la gestión de tareas técnicas, desarrollada con **Vanilla JS** y **Node.js**

## Requisitos previos
* Node.js instalado.
* Cluster en MongoDB Atlas

## Instalación y Arranque
1. Clonar el repositorio.
2. Ir a la carpeta `backend`: `cd backend`.
3. Instalar dependencias: `npm install`.
4. Crear un archivo `.env` con la variable `MONGO_URI`
5. Ejecutar el servidor: `node index.js`.
6. Abrir el archivo `frontend/index.html` en el navegador (puedes usar Live Server).

## Endpoints de la API
`GET /api/tasks`: Lista todas las tareas.
`POST /api/tasks`: Crea una nueva tarea.
`DELETE /api/tasks/:id`: Elimina una tarea.
