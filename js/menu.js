
// Con .offsetWidth podemos saber que tamaño tiene el elemento
const contenedorPagina = document.getElementById('pagina')

const botonMenu = () => {
    contenedorPagina.classList.toggle('active')
}

if (window.innerWidth <= 768) {
    contenedorPagina.classList.remove('active')
}
if (window.innerWidth <= 576) {
    contenedorPagina.classList.remove('active')
}