/* Modificar estilos css mediante"inline styles" VIDEO 11:06:42

Con esto se pueden modificar los estilos de un elemento sin trabajar con clases. */ 


/* Por ejemplo si queremos modificar un ultimo elemento de un contenedor que no tengal clase */


/* Seleccionamos primera ese elemento */ /* con last-child seleccionamos al ultimo elemento del contenedor */

const ultimoEsconder = document.querySelector('#contenedor3 .esconder:last-child')

/* Ahora podemos acceder a su atributo .style, dentro de style tambien hay otras propiedades, ejemplo background y le ponemos color negro*/

ultimoEsconder.style.background = '#000';
ultimoEsconder.style.color = '#fff';

/* En general al hacer esto lo que estamos haciendo es modificar el atributo style del elemento, que seria en el mismo <>, por ejemplo
como style="background: #000; color: #fff*. Estas modificaciones se le conoce como estilos en linea o inline */

/* Por ejemplo si queremos incrementar y disminuir el tamaño de la letra con este método*/

const elementos = document.querySelectorAll('.esconder'); /* Con esto podemos seleccionar todos los elementos de un contenedor, o sin nada ('#contenedor), de todo la página */

/* Seguidamente tambien se debe trabajar con una variable que se va a llamar tamaño y que va a tener el tamaño inicial de la fuente */

let tamaño = 16; /* PARA UNA MEJOR VISUALIZACIÓN, ES MEJOR  SETEARLO AL TAMAÑO DE LA LETRA QUE TIENE NUESTRA PÁGINA, EL CUAL ES 16 */

/* Ahora creamos las funciones y lo que debemos hacer es acceder a cada una de las cajas que hemos seleccionado antes */







const incrementarLetra = () => {

    tamaño = tamaño + 2  /* ES MEJOR SACARLO DE LA ITERACIÓN FOR YA QUE SE EJECUTARA LA CANTIDAD DE VECES DE LEMENTO QUE RECORRA EL FOR, ASI QUE MEJOR POR CADA
    CLICK EN LA FUNCIÓN, SE ACTIVARA EL TAMAÑO-- Y AHÍ SI SERA REALMENTE +1 y -1 
    
    TAMBIÉN SE PUEDE MODIFICAR DE TAMAÑO++ A TAMAÑO = TAMAÑO + (LA CANTIDAD PX QUE PODEMOS AUMENTAR POR CADA CLICK*/


    
    elementos.forEach( (letra) => { /* Esto quierde decir que vamos a recorrer todas las cajas que tenemos seleccionadas y hacerles una función, con este código */
                /* Podemos especificar con "letra" en como queremos identificar a cada texto/caja/elemento*/
        letra.style.fontSize = '30px' /* en vez de poner font-size, se pone fontSize en JS y se pone en '' como cadena de texto */

        /* Podemos reemplazar lo anterior para darle aumento por cada vez que presionemos el boton en +1px o +2px*/


/** OPCIÓN INICIAL */

  /*      letra.style.fontSize = `${tamaño + 1}px` /* Aqui podemos cambiar el ''  por las comillas `` Alt +96 para incrustar una variable
            tamaño++ */   /* Con esto aumentamos cada vez que presionemos el botón */

            /* OTRA FORMA SERÍA INVERTIR LA POSICIÓN, PRIMERO EL TAMAÑO++ Y YA NO ES NECESARIO PONER EL +1 EN LA VARIABLE INCRUSTADA */

/** MEJOR OPCIÓN*/
            
            letra.style.fontSize = `${tamaño}px`

            console.log(tamaño)

            /* EN "LETRA" DEBEMOS PONER EL IDENTIFICADOR QUE USAMOS PRINCIPALMENTE PARA LA FUNCIÓN FOREACH */

        /* console.log(letra) 
        /* Al darle al boton de incrementarLetra, si ponemos console.log podemos ver que nos muestra todos los elementos seleccionados ya que lo recorrio con for */
    })
    
}

const disminuirLetra = () => {

    /* OPCION INICIAL */

 /*   elementos.forEach( (palabra) => { /* ESTO ES PRIMERO YA QUE ANTERIORMENTE HEMOS SELECCIONADO TODOS LOS ELEMENTOS CON LA CLASE .ESCONDER
        palabra.style.fontSize = `${tamaño - 1}px`;
        tamaño--
    })

     MEJOR OPCIÓN */


     tamaño = tamaño - 2 /* ES MEJOR SACARLO DE LA ITERACIÓN FOR YA QUE SE EJECUTARA LA CANTIDAD DE VECES DE LEMENTO QUE RECORRA EL FOR, ASI QUE MEJOR POR CADA
     CLICK EN LA FUNCIÓN, SE ACTIVARA EL TAMAÑO-- Y AHÍ SI SERA REALMENTE +1 y -1 */


    elementos.forEach( (letra) => { /* ESTO ES PRIMERO YA QUE ANTERIORMENTE HEMOS SELECCIONADO TODOS LOS ELEMENTOS CON LA CLASE .ESCONDER */
        
        letra.style.fontSize = `${tamaño}px`;


        console.log(tamaño)
    })

    /* ESTA ES LA VENTAJA DE TRABAJAR CON ESTO, YA QUE ES EN LÍNEA, ESTO NO SE PODRÍA HACER CON CLASES */

    /* VIDEO MINUTO 11:15:00 */
}