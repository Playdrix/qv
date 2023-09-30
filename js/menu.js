const botonMenu = () => {

    const contenedorMenu = document.querySelector('#menu-lateral')
    const contenedorLogo = document.querySelector('#logo')
    const contenedorPagina = document.querySelector('#pagina')

    contenedorMenu.classList.toggle('active')
    contenedorLogo.classList.toggle('active')
    contenedorPagina.classList.toggle('active')

}