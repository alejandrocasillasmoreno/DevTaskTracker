require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Task = require('./Task');

const app = express();
app.use(express.json());
app.use(cors()); // Para que el frontend pueda comunicarse con el backend

// Conexión a Atlas (RA3.c)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("¡Conectado a la base de datos!"))
  .catch(err => console.error("Error de conexión:", err));

// GET /api/tasks: Listar tareas [cite: 36]
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks); // Código 200: OK [cite: 55]
  } catch (err) {
    res.status(500).json({ error: err.message }); // Código 500: Error [cite: 55]
  }
});

// POST /api/tasks: Crear tarea [cite: 36]
app.post('/api/tasks', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask); // Código 201: Creado [cite: 55]
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/tasks/:id: Eliminar tarea [cite: 37]
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Tarea eliminada con éxito" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Escuchar en puerto 3000 o 3001 [cite: 32]
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));