/* getElementById() - Nos permite obtener un elemento en base a su ID

Se debe o puede guardar un getElementById dentro de una variable, puede ser "const"

Este elemento que traemos desde la ID realmente es un Objeto*/

const contenedor1 = document.getElementById('contenedor1')

console.log(contenedor1) /* Se usa console.log para mostrar lo que hace en la consola del navegador*/


/* children - Nos permite obtener los elementos hijos del objeto */

console.log(contenedor1.children)


/* parentElement - Nos permite obtener el elemento padre de un elemento */

console.log(contenedor1.parentElement)


/* getElementByTagName() - Nos permite obtener una colección de elementos en base a la etiqueta.
    Nota: Devuelve una colección de HTML. Una colección no es un arreglo
*/

const divs = document.getElementsByTagName('div')

console.log(divs)
console.log(`Tenemos ${divs.length} elementos div en esta página.`) /* Aqui podemos usar el ` (Alt + 96) para agregar un texto y tener incrustado la variable divs.length*/


/* getElementByClassName() - Nos permite obtener una colección de elementos en base a su clase de CSS
    Nota: Devuelve una colección de HTML.
*/

const contenedores = document.getElementsByClassName('contenedor')

console.log(contenedores)


/* querySelector() - Nos devuelve el primer elemento que coincida con un selector estilo CSS.
    Nota: Devuleve un nodeList
    
    Devuelve solo el primer elemento encontrado y que coincida al declararlo, además se puede agregar a una clase adicional que se encuentre dentro del #contenedor 2, como
    en este caso que es .boton
*/

const cajas = document.querySelector('#contenedor2 .boton')

console.log(cajas)


/* querySelectorAll() - Con esta variante nos permite obtener una colección de elementos en base a un selector estilo CSS
    Nota: Devuelve un nodeList.
*/

const cajasAhora = document.querySelectorAll('#contenedor2 .boton')

console.log(cajasAhora)

/* Tambien podemos iterar esto con el método de forEach() */

cajasAhora.forEach( (unaCaja) => {
    console.log(unaCaja) /* Esto se ejecuta como un for, es decir que itera todos los elementos que tiene ese contenedor */

}) /* Los forEach solamente se podrán ejecutar en las listas de nodeList 
        En cambio en el ejemplo anterior de getElementByClassName nos devolvia una colección de HTML por lo que ahí, nosotros no podriamos utilizar 
        el método de forEach como en los nodeList
        */




/* closest - Nos permite buscar de adentro hacía afuera en busca de un elemento
*/

const ultimacaja = document.querySelector('.boton:last-child'); /* Con last-child obtenemos el ultimo elemento del contenedor */

const ultimaCaja = document.querySelector('.contenedor .boton:last-child'); /* Agregando el #contenedor podemos hacer que seleccione la ultima caja del contenedor2 */

console.log(ultimaCaja)

/* closest, entonces esto buscará a su contenedor padre en consecutiva, iniciando por el primero y buscarlo hasta el final, de adentor hacia afuera
En este ejemplo le señalamos al .contenedor-principal que es el padre de todos. */

console.log(ultimaCaja.closest('.contenedor-general'))


/* Se pueden encadenar todos los métodos que ya se vió, como usar una querySelector dentro del console.log para ubicar por ejemplo a .boton del contenedor2*/

const contenedor2 = document.getElementById('contenedor2')
console.log(contenedor2.querySelector('.boton')) /* A partir del contenedor 2 que se haga una búsqueda con la clase .boton*/


/* MAS USADOS 

1. querySelectorAll - Si quieres obtener varios elementos   
2. querySelector - Si quieres obtener solo un elemento
3. getElementById - Tambien es el de los mas usados ya que es más comodo al selccionar solo a una ID

*/













