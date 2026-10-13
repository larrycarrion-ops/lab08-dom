// Clase propia con constructor, 2 atributos y 2 métodos
class Tarea {
    constructor(id, titulo) {
        this.id = id;
        this.titulo = titulo;
        this.completada = false;
    }

    alternarEstado() {
        this.completada = !this.completada;
    }

    obtenerEstadoTexto() {
        return this.completada ? "Completada" : "Pendiente";
    }
}

// Array para almacenar las instancias de Tarea
const listaTareas = [];

// Selección de elementos del DOM
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const errorMessage = document.getElementById('error-message');

// Evento 1: 'submit' en el formulario
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const texto = taskInput.value.trim();

    // Validación visual de datos del usuario (sin alert)
    if (texto === '') {
        errorMessage.textContent = 'El nombre de la tarea no puede estar vacío.';
        return;
    }

    errorMessage.textContent = ''; // Limpiar mensaje de error

    // Creación del objeto usando la clase Tarea
    const nuevaTarea = new Tarea(Date.now(), texto);
    listaTareas.push(nuevaTarea);

    renderizarTareaDOM(nuevaTarea);
    taskInput.value = '';
});

// Evento 2: 'input' para limpiar el mensaje de error al escribir
taskInput.addEventListener('input', function () {
    if (taskInput.value.trim() !== '') {
        errorMessage.textContent = '';
    }
});

// Función para agregar elementos dinámicamente al DOM mediante createElement
function renderizarTareaDOM(tareaObj) {
    const li = document.createElement('li');
    li.dataset.id = tareaObj.id;

    const span = document.createElement('span');
    span.textContent = tareaObj.titulo;

    const btnCompletar = document.createElement('button');
    btnCompletar.textContent = 'Completar';
    btnCompletar.className = 'btn-completar';

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.className = 'btn-eliminar';

    li.appendChild(span);
    li.appendChild(btnCompletar);
    li.appendChild(btnEliminar);
    taskList.appendChild(li);
}

// Evento 3: 'click' (delegación de eventos para botones de completar y eliminar)
taskList.addEventListener('click', function (e) {
    const li = e.target.parentElement;
    if (!li || !li.dataset.id) return;

    const idTarea = Number(li.dataset.id);
    const tareaObj = listaTareas.find(t => t.id === idTarea);

    // Acción para completar
    if (e.target.classList.contains('btn-completar')) {
        if (tareaObj) {
            tareaObj.alternarEstado();
            const span = li.querySelector('span');
            span.classList.toggle('completada');
            e.target.textContent = tareaObj.completada ? 'Desmarcar' : 'Completar';
        }
    }

    // Acción para eliminar elemento del DOM
    if (e.target.classList.contains('btn-eliminar')) {
        const index = listaTareas.findIndex(t => t.id === idTarea);
        if (index !== -1) {
            listaTareas.splice(index, 1);
        }
        li.remove(); // Eliminación del DOM por acción del usuario
    }
});

// Versión 2: manejo de eventos e interacción
document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const text = document.getElementById('task-input').value;
    if(!text) return;
    const li = document.createElement('li');
    li.textContent = text;
    document.getElementById('task-list').appendChild(li);
});