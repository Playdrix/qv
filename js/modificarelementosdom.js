/* Cada elemento tambien va a tener propiedades y métodos */




/* elemento.innerHTML - Nos permite obtener el código html interno de un elemento
    y cambiar o modificarlo*/

const primeraCaja = document.querySelector('.boton');

console.log(primeraCaja.innerHTML) /* Aqui nos muestra el valor que esta dentro del contenedor */

/* Ahora para modificarlo simplemente quitamos el console.log y lo podemos modificar con =, que es de asignación (nueva asignación) */

primeraCaja.innerHTML = 'Probando1'; /* Dentro se puede agregar etiquetas html <> y si funcionará */





/* elemento.attribute - Nos permite acceder y cambiar atributos del elemento, también como agregar atributos como una ID*/

primeraCaja.id = 'aqui' /* En caso que ya tenga una id, al reasignar de esta forma lo va a sobreescribir */

primeraCaja.value = "nuevo" /* Es valor que tienes dentro del input o de la caja de texto */

primeraCaja.src = "nueva imagen" /* Para cambiar la ruta de la imagen que esta cargando */ /* En las propiedades no se puede poner guion, "data-id" no se puede"



/* elemento.setAttribute() - Nos permite ser más específicos y decirle que queremos modificar o agregar un atributo y le podemos pasar
un nuevo valor 

Esto da más control ademas de que se va a poder agregar atributos personalizados*/

primeraCaja.setAttribute('class', "boton active") /* setAtrribute recibe dos parametros, el priemro class: el atributo que queremos modificar, el segundo "boton active"
                                                    va a ser el valor, se sobreescribe el valor y se puede agregar algo más*/
                                                    



/* Se puede agregar atributos personzalidos como */

primeraCaja.setAttribute('data-id', '12-23') /* De esa forma se agrega atributos personzalidos como data-id */






/* elemento.style.property - Nos permite cambiar los estilos css de un elemento */ /* El # sirve para el ID */ /* Con queryselector buscas la primera opcion de .boton */

const contenedor2Caja1 = document.querySelector('#contenedor2 .boton');
console.log(contenedor2Caja1) 

/* para editar se puede quitar el console.log y poner .style (propiedad) y poner un .background, y com otodo eso es una propiedad se pone = para nueva asignacion */

contenedor2Caja1.style.background = '#000'
contenedor2Caja1.style.color = '#ffff' /* aqui se cambio el color*/
contenedor2Caja1.style.textTransform = 'uppercase' /* Aqui podemos reemplazar la propiedad text-transform por textTransform y asi tener acceso a esa propiedad, usar uppercase
para poner en MAYUSCULAS */



/* MIN 10:38:00 */