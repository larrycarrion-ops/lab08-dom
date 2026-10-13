
# Bitacora de JavaScript interactivo
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: Google Chrome
## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde la consola |cambio el titulo|no|
| textContent desde app.js |cambio el titulo a "Hola TECSUP"|si|
| style.color |Cambio el color del titulo|si|
| classList.add |Aplico un fonde amarillo|si|
| createElement + appendChild |agrego a javascript como nuevo elemento|si|


## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion | 
|----------------|-----------------------|------------------------| 
| click | hacer un clic primario|suma 1 por clic| 
| dblclick |hacer doble clic rapido |suma 1 al hacer doble clic| 
| mouseover |pasar el puntero del mouse por encima del boton|suma 1 cada vez que el mouse entra al boton|

## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre |el texto "Hola,..." se actualiza|no|
| Enviar sin preventDefault |el mensaje aparece un segundo y se recarga la pagina|si|
| Enviar con preventDefault, correo sin @ |muestra "Correo no valido falta @" en color rojo|no|
| Enviar con preventDefault, correo con @ |muestra "enviado y el correo que escribimos"|no|


## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | descripcion() | conDescuento(0.25) | 
|--------|--------|--------|---------------|--------------------| 
| laptop | laptop| 2500| laptop -S/2500.00|1875 |
| mouse | mouse| 45| mouse -S/45.00| 33.75| 
| teclado | teclado| 120| teclado -S/120.00| 90| 
| monitor | monitor| 680| monitor -S/680.00| 510|

Usar una clase permite reutilizar la estructura y la lógica (métodos) para múltiples objetos sin duplicar código. 
Además, facilita agregar o modificar productos dinámicamente en la interfaz dibujando los datos desde un arreglo sin alterar el HTML manualmente.

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba | Total que muestra la pagina | Correcto (Si/No) | 
|--------|-----------------------------|------------------| 
| Cuaderno 12.50 | 12.50|si | 
| + Lapicero 3.20 |15.70 | si| 
| + Mochila 89.90 | 105.60| si| 
| Sin Number() | Error en consola (this.precio.toFixed is not a function)| no| 


| Pieza | Linea de tu codigo donde aparece | Para que sirve | 
|-------|----------------------------------|----------------| 
| DOM |document.querySelector("#carrito") |Selecciona y modifica elementos del HTML para dibujar la lista y el total en pantalla | 
| Evento | formProducto.addEventListener("submit", ...)|Captura la interacción del usuario al enviar el formulario sin recargar la página | 
| Objeto | new Producto(...) / new Carrito()|Almacena y gestiona los datos de los productos y realiza el cálculo matemático del total |
