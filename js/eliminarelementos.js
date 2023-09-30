const eliminarElemento = () => {

    /* 1. Primero debemos obtener el elemento padre de la caja que queremos borrar */

    const contenidoPadre = document.getElementById('contenedor-general');

    /* 2. Depues debemos obtener la referencia del elemento que se quiere borrar. SE DEBE PONER LA VARIABLE DE LO QUE HEMOS SELECCIONADO, despues .querySelector*/

    const contenidoEliminar = contenidoPadre.querySelector('#contenedor3');
    const contenidoEliminar1 = contenidoPadre.querySelector('#contenedor1'); /* Nos busca el primer elemento que tenga la clase .esconder con query Selector del contenedor */

    /* 3. removeChild() - Como remove child podemos eliminar un elemento hijo de un contenedor padre 
    
    Primero seleccionamos el contenedor, despues el elemento que queremos eliminar, en este código*/


    if (contenidoEliminar) {  /* Este IF se pone para evitar que salga error por si no encuentra ningun elemento seleccionado, digamos que se ha acabado
                                los elementos que puede seleccionar, si no esta la condicional, no va a ejecutar el removeChild ni nada */

        contenidoPadre.removeChild(contenidoEliminar); /* Para mi ejemplo aqui eliminamos el contenedor 3 */
        contenidoPadre.removeChild(contenidoEliminar1); /* Y aqui al contenedor 1 */
        
    }

}