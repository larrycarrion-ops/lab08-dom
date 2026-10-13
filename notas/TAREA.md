# Tarea: Mi componente interactivo 
# Componente elegido
Lista de tareas interactiva con validación, estado de finalización y opción de eliminación.
## Version 1: solo DOM
Se construyó la interfaz estática básica utilizando HTML y manipulación directa del DOM para insertar elementos preliminares.

```js
// Versión 1: inserción estática en DOM
const list = document.getElementById('task-list');
const item = document.createElement('li');
item.textContent = "Tarea inicial de prueba";
list.appendChild(item);

Qué se agregó y por qué: Se crearon elementos estáticos para validar la estructura del contenedor.

Cambio en el comportamiento: La página carga mostrando elementos creados vía JS, pero sin interactividad.

## Version 2: con eventos

## Version 3: con clases y objetos ## Donde uso DOM, eventos y objetos ## Pruebas realizadas
## Por que disene asi mi clase
