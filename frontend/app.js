const API = 'http://localhost:3000/api/tasks';

// Cargar tareas al iniciar
async function loadTasks() {
    const res = await fetch(API);
    const tasks = await res.json();
    const container = document.getElementById('taskList');
    container.innerHTML = '';
    tasks.forEach(t => {
        const div = document.createElement('div');
        div.className = 'task-card';
        div.innerHTML = `
            <span><strong>${t.titulo}</strong> (${t.tecnologia})</span>
            <button class="btn-delete" onclick="deleteTask('${t._id}')">Borrar</button>
        `;
        container.appendChild(div);
    });
}

// Guardar tarea (POST)
document.getElementById('taskForm').onsubmit = async (e) => {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const tecnologia = document.getElementById('tecnologia').value;
    await fetch(API, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ titulo, tecnologia })
    });
    loadTasks(); // Actualización dinámica (RA1.e)
};

// Borrar tarea (DELETE)
async function deleteTask(id) {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    loadTasks();
}

loadTasks();