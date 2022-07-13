window.addEventListener('load', function() {

    // Declaro Div de errores e Input de Nombre
    let inputNombre = document.querySelector('.first_name')
    let divErroresNombre = document.querySelector('.error-first-name')

    // Declaro Div de errores e Input de Apellido
    let inputApellido = document.querySelector('.last_name')
    let divErroresApellido = document.querySelector('.error-last-name')

    // Declaro Div de errores e Input de eMail
    let inputEmail = document.querySelector('.email')
    let divErroresEmail = document.querySelector('.error-email')

    // Declaro Div de errores e Input de Password
    let inputPassword = document.querySelector('.pass1')
    let divErroresPassword = document.querySelector('.error-password')


    // Declaro el Formulario de registro
    let form = document.querySelector('.formulario-registro')

    // Focus en castillero "Nombres"
    inputNombre.focus()

    // Declaro los Inputs con clase "is-invalid"
    inputNombre.classList.add('is-invalid')
    inputApellido.classList.add('is-invalid')
    inputEmail.classList.add('is-invalid')
    inputPassword.classList.add('is-invalid')

    divErroresNombre.style.opacity = "0"
    divErroresApellido.style.opacity = "0"
    divErroresEmail.style.opacity = "0"
    divErroresPassword.style.opacity = "0"
    


    inputNombre.addEventListener('input', (e) => { //Evento "Input" de NOMBRE

        if (e.target.value === '') {

            inputNombre.classList.remove('menor-a-5')
            inputNombre.classList.remove('is-valid')
            inputNombre.classList.add('is-invalid')
            divErroresNombre.style.opacity = "0"
            if (divErroresNombre.innerHTML) {
                setTimeout(function(){
                
                    divErroresNombre.innerHTML = '* Campo obligatorio'
                    divErroresNombre.style.opacity = "1"
                    
                },200) 

            } else {
                divErroresNombre.innerHTML = '* Campo obligatorio'
                divErroresNombre.style.opacity = "1"
            }
            
            
        } else if (e.target.value.length < 5 && !e.target.classList.contains('menor-a-5')) {
            
            inputNombre.classList.remove('is-valid')
            inputNombre.classList.add('is-invalid')
            inputNombre.classList.add('menor-a-5')
            divErroresNombre.style.opacity = "0"
            if (divErroresNombre.innerHTML) {
                setTimeout(function(){
                
                    divErroresNombre.innerHTML = 'Mínimo 5 caracteres'
                    divErroresNombre.style.opacity = "1"
                    
                },200) 

            } else {
                divErroresNombre.innerHTML = 'Mínimo 5 caracteres'
                divErroresNombre.style.opacity = "1"
            }
            
        } else if (e.target.value.length < 5 && e.target.classList.contains('menor-a-5')) {
            
        } else {
            
            inputNombre.classList.remove('menor-a-5')
            inputNombre.classList.remove('is-invalid')
            inputNombre.classList.add('is-valid')
            divErroresNombre.style.opacity = "0"
            divErroresNombre.innerHTML = ''
        }
    })


    inputApellido.addEventListener('input', (e) => {

        if (e.target.value === '') {

            inputApellido.classList.remove('menor-a-5')
            inputApellido.classList.remove('is-valid')
            inputApellido.classList.add('is-invalid')
            divErroresApellido.style.opacity = "0"
            if (divErroresApellido.innerHTML) {
                setTimeout(function(){
                
                    divErroresApellido.innerHTML = '* Campo obligatorio'
                    divErroresApellido.style.opacity = "1"
                    
                },200) 

            } else {
                divErroresApellido.innerHTML = '* Campo obligatorio'
                divErroresApellido.style.opacity = "1"
            }

        } else if (e.target.value.length < 5 && !e.target.classList.contains('menor-a-5')) {

            inputApellido.classList.remove('is-valid')
            inputApellido.classList.add('is-invalid')
            inputApellido.classList.add('menor-a-5')
            divErroresApellido.style.opacity = "0"
            if (divErroresApellido.innerHTML) {
                setTimeout(function(){
                
                    divErroresApellido.innerHTML = 'Mínimo 5 caracteres'
                    divErroresApellido.style.opacity = "1"
                    
                },200) 

            } else {
                divErroresApellido.innerHTML = 'Mínimo 5 caracteres'
                divErroresApellido.style.opacity = "1"
            }

        } else if (e.target.value.length < 5 && e.target.classList.contains('menor-a-5')) {
            
        } else {
            
            inputApellido.classList.remove('menor-a-5')
            inputApellido.classList.remove('is-invalid')
            inputApellido.classList.add('is-valid')
            divErroresApellido.style.opacity = "0"
            divErroresApellido.innerHTML = ''
        }
    })


    inputEmail.addEventListener('input', (e) => {

        if (e.target.value === '') {

            inputEmail.classList.remove('no-es-un-correo')
            inputEmail.classList.remove('is-valid')
            inputEmail.classList.add('is-invalid')
            divErroresEmail.style.opacity = "0"
            if (divErroresEmail.innerHTML) {
                setTimeout(function(){
                
                    divErroresEmail.innerHTML = '* Campo obligatorio'
                    divErroresEmail.style.opacity = "1"
                    
                },200) 

            } else {
                divErroresEmail.innerHTML = '* Campo obligatorio'
                divErroresEmail.style.opacity = "1"
            }

        } else if (e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === null && !e.target.classList.contains('no-es-un-correo')) {

            
            inputEmail.classList.remove('is-valid')
            inputEmail.classList.add('is-invalid')
            inputEmail.classList.add('no-es-un-correo')
            divErroresEmail.style.opacity = "0"
            if (divErroresEmail.innerHTML) {
                setTimeout(function(){
                
                    divErroresEmail.innerHTML = 'No es un correo'
                    divErroresEmail.style.opacity = "1"
                    
                },200) 
            } else {
                divErroresEmail.innerHTML = 'No es un correo'
                divErroresEmail.style.opacity = "1"
            }

        } else if (e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === null && e.target.classList.contains('no-es-un-correo')) {
            
        } else {
            
            inputEmail.classList.remove('no-es-un-correo')
            inputEmail.classList.remove('is-invalid')
            inputEmail.classList.add('is-valid')
            divErroresEmail.style.opacity = "0"
            divErroresEmail.innerHTML = ''
        }
    })


    inputPassword.addEventListener('input', (e) => {

        if (e.target.value === '') {

            inputPassword.classList.remove('menor-a-8')
            inputPassword.classList.remove('is-valid')
            inputPassword.classList.add('is-invalid')
            divErroresPassword.style.opacity = "0"
            if (divErroresPassword.innerHTML) {
                setTimeout(function(){
                
                    divErroresPassword.innerHTML = '* Campo obligatorio'
                    divErroresPassword.style.opacity = "1"
                    
                },200) 

            } else {
                divErroresPassword.innerHTML = '* Campo obligatorio'
                divErroresPassword.style.opacity = "1"
            }
            
            
        } else if (e.target.value.length < 8 && !e.target.classList.contains('menor-a-8')) {
            
            inputPassword.classList.remove('is-valid')
            inputPassword.classList.add('is-invalid')
            inputPassword.classList.add('menor-a-8')
            divErroresPassword.style.opacity = "0"
            if (divErroresPassword.innerHTML) {
                setTimeout(function(){
                
                    divErroresPassword.innerHTML = 'Mínimo 8 caracteres'
                    divErroresPassword.style.opacity = "1"
                    
                },200) 

            } else {
                divErroresPassword.innerHTML = 'Mínimo 8 caracteres'
                divErroresPassword.style.opacity = "1"
            }
            
        } else if (e.target.value.length < 8 && e.target.classList.contains('menor-a-8')) {
            
        } else {
            
            inputPassword.classList.remove('menor-a-8')
            inputPassword.classList.remove('is-invalid')
            inputPassword.classList.add('is-valid')
            divErroresPassword.style.opacity = "0"
            divErroresPassword.innerHTML = ''
        }

    })


    form.addEventListener('submit', (e) => {
        
        let inputInvalid = document.querySelector('.is-invalid')

        if (inputInvalid !== null) {
            e.preventDefault()
            inputInvalid.focus()
        } 
    })
    
})


