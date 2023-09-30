const agregarElemento = () => { /* Función tipo flecha, aqui ira todo el código que podra permitir crear y agregar una caja/elemento */

    /* 1. Crear elemento - createElement()
    Recibe como parámetro una cadena de texto con la etiqueta que queremos crear */

    /*document.createElement('div'); /* Por ahora al hacer esto solo lo estamos creando y no lo estamos insertando */

    const nuevoElemento = document.createElement('div'); /* Este elemento se debe guardar en alguna parte, entonces lo ponemos dentro de una variable */


    /* 2. Agregar texto y atributos al elemento 
    Aqui por ejemplo podemos agregar una id o una clase*/

    nuevoElemento.innerText = 'Aquí el nuevo elemento' /* Con innerText puedo acceder a texto interno de un caja/elemento y modificarlo o reasignarlo o agregar*/
    nuevoElemento.setAttribute('id', 'id-nueva'); /* Aqui ya podemos agregar un atributo id por ejemplo y al lado, el contenido de la id (atributo)*/

    /* La id en este caso no es buena colocarla ya que puede repetirse y no es lo recomendable en un documento html */

    nuevoElemento.setAttribute('class', 'caja activado'); /* Aqui agregamos tambien un atributo class (clase) y podemos modificar su contenido, 
    agregando por ejemplo una palabra mas */

    /* 3. Agregar el elemento al DOM, hasta aqui el boton no hara nada en la pagina, por lo que con esto podemos agregar */


    const contenedor = document.getElementById('contenedor2'); /* Aqui obtenemos el elemento en una variable contenedor en el que vamos a agregar, 
    digamos que lo seleccionamos, NO ES NECESARIO COLOCAR # a traer el elemento*/

    /* Aqui tenemos varias formas de hacerlo, USAR SOLO UNO PARA CADA SITUACIÓN

    /* 3.1 .appendChild() - Esto nos va a permitir agregar un elemento/caja al final de su contenedor*/

    contenedor.appendChild(nuevoElemento);


    /* 3.2 insertAdjacentElement() - Nos permite agregar un elemento con ciertos parámetros
        Valores:

        afterbegin - como primer elemento  / Mayormente se trabaja con este
        beforebegin - antes del elemento padre
        beforeend - como último elemento
        afterend - después del elemento padre / Con este tambien se trabaja mayormente
    
    */


    contenedor.insertAdjacentElement('afterend', nuevoElemento) /* Dentro de las comillas va el argumento de una de las ubicacones (afeter,before, etc)
     despues de una "," va el elemento creado*/


    /* 3.3 replaceWith() - Nos permite reemplazar un elemento con otro */

    document.querySelector('#contenedor3 .esconder').replaceWith(nuevoElemento); /* Primero se accede a la primera caja o contenedor con querySelector, despues al primer div (si hay varios
         nos da la primera por ser querySelector, y al final se pone el .replaceWith() para REEMPLAZAR el elemento por el que ya hemos creado en JS
         AQUÍ SI ES NECESARIO PONER EL # PARA IDENTIFICAR LA ID YA QUE ES QUERYSELECTOR. 
         
         VIDEO MIN 10:49:50*/

}