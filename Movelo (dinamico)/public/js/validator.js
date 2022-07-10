window.addEventListener('load', function() {

    // Registro

    // Registo--inputs

    let inputAutoRegister = document.querySelector('.first_name')
    let inputNombre = document.querySelector('.first_name')
    let inputApellido = document.querySelector('.last_name')
    let email = document.querySelector('.email')
    let password = document.querySelector('.pass1')
    let fecha = document.querySelector('.fecha')

    // Registro--formulario 

    let form = document.querySelector('.formulario-registro')

    let ulErrores = document.querySelector('.errores')

    inputAutoRegister.focus()

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let errores = []

        if(inputNombre.value === '') {
            inputNombre.classList.add('is-invalid')
            errores.push('Debes introducir tu nombre')
        } else {
            inputNombre.classList.remove('is-invalid')
            inputNombre.classList.add('is-valid')
        }

        if(inputApellido.value === '') {
            inputApellido.classList.add('is-invalid')
            errores.push('Debes introducir tu apellido')
        } else {
            inputApellido.classList.remove('is-invalid')
            inputApellido.classList.add('is-valid')
        }

        if(email.value === '' || email.type !== 'email') {
            email.classList.add('is-invalid')
            errores.push('Debes introducir un correo electronico valido')

        } else {
            email.classList.remove('is-invalid')
            email.classList.add('is-valid')
        }

        if(password.value === '') {
            password.classList.add('is-invalid')
            errores.push('Debes introducir un password correcto')
        } else {
            {
                password.classList.remove('is-invalid')
                password.classList.add('is-valid')
            }
        }

        if(fecha.value === '') {
            fecha.classList.add('is-invalid')
            errores.push('Debes introducir tu fecha de nacimiento')

        } else {
            {
                fecha.classList.remove('is-invalid')
                fecha.classList.add('is-valid')
            }
        }

        ulErrores.innerHTML = ''
        if(errores.length > 0) {
            ulErrores.classList.add('alert-warning')
            for(let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<ul>' + errores[i] + '</ul>'
            }
        } else {
            form.submit()
        }
})
})

window.addEventListener('load', function() {
 

    // Login

    let inputEmail = document.querySelector('.emailLogin')
    let inputPassword = document.querySelector('.passwordLogin')

    let formIngreso = document.querySelector('.formulario-ingreso')

    let ulErroresIngreso = document.querySelector('.erroresIngreso')

    formIngreso.addEventListener('submit', (e) => {
        e.preventDefault();

        let errores = []

        if(inputEmail.value === '' || inputEmail.type !== 'email') {
            inputEmail.classList.add('is-invalid')
            errores.push('Debes introducir un correo electronico valido')
        } else {
            inputEmail.classList.remove('is-invalid')
            inputEmail.classList.add('is-valid')
        }

        if(inputPassword.value === '') {
            inputPassword.classList.add('is-invalid')
            errores.push('Debes introducir un password correcto')
        } else {
            {
                inputPassword.classList.remove('is-invalid')
                inputPassword.classList.add('is-valid')
            }
        }

        ulErroresIngreso.innerHTML = ''
        if(errores.length > 0) {
            ulErroresIngreso.classList.add('alert-warning')
            for(let i = 0; i < errores.length; i++) {
                ulErroresIngreso.innerHTML += '<ul>' + errores[i] + '</ul>'
            }
        } else {
            formIngreso.submit()
        }

        



        

    // Crear servicio

    // Editar servicio

})
})