/* Modificar estilos CSS mediante clases */

const contenidoCSS = document.querySelector('#contenedor3 .esconder'); /* Aqui podemos seleccionar el primer elemento del contenedor, es decir, su primera clase con query */

console.log(contenidoCSS.classList); /* En el navegador sale DOMTokenList */

/* Con la propiedad classList podemos agregar o eliminar clases */

/* Como le podemos hacer para agregarle clases, en este caso sería con el método classList.add() el cual nos permite agregar clases a un elemento */

const agregarClase = () => {

    contenidoCSS.classList.add('activado') /* Si se quiere agregar una clase, se accede al contenedor/caja (contenidoCSS), despues accedemos a classLits y despues accedemos
    al método .add(), y ahí adentro se va a poner la clase que se quiere agregar, como 'activado' */

}


const eliminarClase = () => {

    contenidoCSS.classList.remove('activado') /* Aqui remove va a buscar una clase y la va a eliminar */

}

/* Esto funciona las dos funciones add y remove en una sola */

const toggleClase = () => {

    contenidoCSS.classList.toggle('activado'); /* Con .classList podemos acceder a la lista clases del elemento que hemos seleccionado con query  */

}


/* Comprobar clase, con esto se puede hacer que al querer presionar el boton quiero que me devuelva en caso de que tenga la clase, me va a decir si su caja1 tiene la
 clase activa, en caso no se tenga la clase activa, quiero que me diga que no tiene esa clase, como una comprobación para saber si un elemento tiene una clase o no*/


const comprobarClase = () => {

    /* 1. Priemro se hace una comprobación con un método contains() */ /* Aun se debe acceder a classList para tener la lista de clases */

    if (contenidoCSS.classList.contains('activado')) { /* Con contais consultamos si contiene una clases el cual vamos a preguntar */

        /* Entonces si toda la condición es verdadera (es decir, si contiene la clase activado), se va a ejecutar este código */
        console.log("La clase tiene la caja activa.")
    } else {
        console.log("La clase no esta activa ahora mismo.")
    }

    console.log(" y contiene las siguientes clases: ")

    /* Aqui podemos mostrar todas las clases con un forEach */

    /* Accedemos a la variable, despues a classList para obtener sus clases, despues a for Each y ahi podemos ejecutar que por cada una
    de las clases () se va a ejecutar una función {}
    
    Si el código es de sólo una linea se pueden quitar las llaves {} */

    /* Con esto nosotros podemos trabajar con forEach dentro de classList */

    contenidoCSS.classList.forEach( (clase) => {  /* Cada uno de los elementos de esa lista lo podemos identificar como una "clase", eso puesto entre corchetes */
        console.log(clase) /* Aqui imprimimos en consola lo que mencionamos como nombre: clase */
    })

}



