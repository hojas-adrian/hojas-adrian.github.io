window.addEventListener('DOMContentLoaded', function () {
    var boton = document.querySelector('#button'),
        body = document.body;
    boton.addEventListener('click', function () {

        if (body.className != 'menu') {
            body.classList.add('menu')
            boton.textContent = 'Close';
        } else {
            body.classList.remove('menu')
            boton.textContent = 'About';
        }
    })
})
