
// Con .offsetWidth podemos saber que tamaño tiene el elemento
const contenedorPagina = document.getElementById('pagina')

const botonMenu = () => {
    contenedorPagina.classList.toggle('active')
}

window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        contenedorPagina.classList.remove('active')
    }
    if (window.innerWidth <= 576) {
        contenedorPagina.classList.remove('active')
    }
})




const botonAplicaciones = document.getElementById('aplicaciones-boton')
const botonWeb = document.getElementById('web-boton')
const botonComentarios = document.getElementById('comentarios-boton')

const contenedorAplicaciones = document.getElementById('pagina-aplicaciones')
const contenedorWeb = document.getElementById('pagina-web')
const contenedorComentarios = document.getElementById('pagina-comentarios')


botonAplicaciones.addEventListener('click', function() {
    contenedorAplicaciones.classList.add('active')
    contenedorWeb.classList.remove('active')
    contenedorComentarios.classList.remove('active')

})

botonWeb.addEventListener('click', function() {
    contenedorWeb.classList.add('active')
    contenedorAplicaciones.classList.remove('active')
    contenedorComentarios.classList.remove('active')
})

botonComentarios.addEventListener('click', function() {
    contenedorComentarios.classList.add('active')
    contenedorAplicaciones.classList.remove('active')
    contenedorWeb.classList.remove('active')
})
