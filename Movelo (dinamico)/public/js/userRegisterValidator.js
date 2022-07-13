window.addEventListener('load', function() {

    // Declaro Div de errores e Input de Nombre
    let inputNombre = document.querySelector('.first_name')
    let pErroresNombre = document.querySelector('.error-first-name')

    // Declaro Div de errores e Input de Apellido
    let inputApellido = document.querySelector('.last_name')
    let pErroresApellido = document.querySelector('.error-last-name')

    // Declaro Div de errores e Input de eMail
    let inputEmail = document.querySelector('.email')
    let pErroresEmail = document.querySelector('.error-email')

    // Declaro Div de errores e Input de Password
    let inputPassword = document.querySelector('.pass1')
    let pErroresPassword = document.querySelector('.error-password')


    // Declaro el Formulario de registro
    let form = document.querySelector('.formulario-registro')

    // Focus en castillero "Nombres"
    inputNombre.focus()

    // Declaro los Inputs con clase "os-invalid"
    inputNombre.classList.add('is-invalid')
    inputApellido.classList.add('is-invalid')
    inputEmail.classList.remove('is-invalid')
    inputPassword.classList.add('is-invalid')


    inputNombre.addEventListener('input', (e) => { //Evento "Input" de NOMBRE

        if (e.target.value === '') {

            inputNombre.classList.add('is-invalid')
            inputNombre.classList.remove('is-valid')
            pErroresNombre.classList.add('alert-warning')
            pErroresNombre.innerHTML = '* Campo obligatorio'

        } else if (e.target.value.length < 5) {

            inputNombre.classList.add('is-invalid')
            inputNombre.classList.remove('is-valid')
            pErroresNombre.classList.add('alert-warning')
            pErroresNombre.innerHTML = 'Mínimo 5 caracteres'

        } else {

            inputNombre.classList.remove('is-invalid')
            inputNombre.classList.add('is-valid')
            pErroresNombre.innerHTML = ''
        }
    })


    inputApellido.addEventListener('input', (e) => {

        if (e.target.value === '') {

            inputApellido.classList.add('is-invalid')
            inputApellido.classList.remove('is-valid')
            pErroresApellido.classList.add('alert-warning')
            pErroresApellido.innerHTML = '* Campo obligatorio'

        } else if (e.target.value.length < 5) {

            inputApellido.classList.add('is-invalid')
            inputApellido.classList.remove('is-valid')
            pErroresApellido.classList.add('alert-warning')
            pErroresApellido.innerHTML = 'Mínimo 5 caracteres'

        } else {

            inputApellido.classList.remove('is-invalid')
            inputApellido.classList.add('is-valid')
            pErroresApellido.innerHTML = ''
        }
    })


    inputEmail.addEventListener('input', (e) => {

        if (e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {

            inputEmail.classList.remove('is-invalid')
            inputEmail.classList.add('is-valid')
            pErroresEmail.innerHTML = ''

        } else if (e.target.value === '') {

            inputEmail.classList.add('is-invalid')
            inputEmail.classList.remove('is-valid')
            pErroresEmail.classList.add('alert-warning')
            pErroresEmail.innerHTML = '* Campo obligatorio'

        } else {

            inputEmail.classList.add('is-invalid')
            inputEmail.classList.remove('is-valid')
            pErroresEmail.classList.add('alert-warning')
            pErroresEmail.innerHTML = 'No es un correo'
        }
    })


    inputPassword.addEventListener('input', (e) => {

        if (e.target.value.length < 8) {

            inputPassword.classList.add('is-invalid')
            inputPassword.classList.remove('is-valid')
            pErroresPassword.classList.add('alert-warning')
            pErroresPassword.innerHTML = 'Mínimo 8 caracteres'
            
        } else if (e.target.value === '') {
            
            inputPassword.classList.add('is-invalid')
            inputPassword.classList.remove('is-valid')
            pErroresPassword.classList.add('alert-warning')
            pErroresPassword.innerHTML = '* Campo obligatorio'
            
        } else {

            inputPassword.classList.remove('is-invalid')
            inputPassword.classList.add('is-valid')
            pErroresPassword.innerHTML = ''
        }
    })


    form.addEventListener('submit', (e) => {
        
        let inputValidar = document.querySelector('.is-invalid')

        if (inputValidar !== null) {
            e.preventDefault()
        } 
    })
    
})


