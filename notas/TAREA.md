# Tarea: Mi componente interactivo 
# Componente elegido
Lista de tareas interactiva con validación, estado de finalización y opción de eliminación.
## Version 1: solo DOM
Se construyó la interfaz estática básica utilizando HTML y manipulación directa del DOM para insertar elementos preliminares.

Qué se agregó y por qué: Se crearon elementos estáticos para validar la estructura del contenedor.

Cambio en el comportamiento: La página carga mostrando elementos creados vía JS, pero sin interactividad.

## Version 2: con eventos
Se agregaron escuchadores de eventos para interactuar con el formulario e insumos del usuario.

Qué se agregó y por qué: Listeners para submit, click e input, además de la validación sin alert.

Cambio en el comportamiento: El usuario ahora puede enviar tareas dinámicamente y eliminar/completar elementos en tiempo real.


## Version 3: con clases y objetos ## Donde uso DOM, eventos y objetos ## Pruebas realizadas

Se refactorizó la lógica introduciendo una clase programática para representar los datos.

Qué se agregó y por qué: La clase Tarea para encapsular la información y las mutaciones de estado de cada tarea.

Cambio en el comportamiento: El estado de cada ítem (completado/pendiente) se gestiona desde el objeto y se refleja dinámicamente en el DOM.

## Por que disene asi mi clase
Diseñé la clase Tarea con los atributos id y titulo para identificar de manera única cada elemento en la lista y almacenar su descripción textual. El atributo booleano completada permite realizar un seguimiento interno del estado de la tarea sin depender únicamente de las clases CSS en el DOM. Además, incluí los métodos alternarEstado() y obtenerEstadoTexto() para encapsular la lógica de negocio, facilitando la modificación del estado y garantizando la coherencia entre el objeto en JavaScript y la representación visual en la interfaz web.

| Categoría | Sección del Código Final |
| --- | --- |
| **DOM** | `document.getElementById()`, `document.createElement()`, `appendChild()`, `li.remove()` |
| **Eventos** | `addEventListener('submit')`, `addEventListener('input')`, `addEventListener('click')` |
| **Objetos** | `class Tarea`, `new Tarea()`, `tareaObj.alternarEstado()`, array `listaTareas` |

| Acción | Resultado esperado | Resultado obtenido | Cumple (Sí / No) |
| --- | --- | --- | --- |
| Intentar agregar una tarea vacía | Mostrar mensaje de error en la página | Se muestra mensaje en color rojo debajo del formulario | Sí |
| Escribir en el input tras un error | Limpiar el mensaje de error automáticamente | El mensaje desaparece al presionar una tecla | Sí |
| Ingresar "Comprar leche" y enviar | Crear nuevo elemento `li` en la lista | Se agrega la tarea correctamente a la lista | Sí |
| Hacer clic en el botón "Completar" | Tachar el texto de la tarea | El texto se tacha y el botón cambia a "Desmarcar" | Sí |
| Hacer clic en el botón "Eliminar" | Remover el elemento de la lista | La tarea se elimina por completo del DOM | Sí |