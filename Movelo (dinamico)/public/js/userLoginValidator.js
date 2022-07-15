window.addEventListener('load', function() {
 
    // Login

    let inputEmail = document.querySelector('.emailLogin')
    let pErroresIngresoEmail = document.querySelector('.erroresIngresoEmail')

    let inputPassword = document.querySelector('.passwordLogin')
    let pErroresIngresoPassword = document.querySelector('.erroresIngresoPassword')

    let form = document.querySelector('.formulario-ingreso')    
    
    
    pErroresIngresoPassword.style.opacity = "0"
    pErroresIngresoEmail.style.opacity = "0"

    inputEmail.addEventListener("input", (e) =>{
        
        if (e.target.value === '') {

            inputEmail.classList.remove('no-es-un-correo')
            inputEmail.classList.remove('is-valid')
            inputEmail.classList.add('is-invalid')
            pErroresIngresoEmail.style.opacity = "0"            
            if (pErroresIngresoEmail.innerHTML) {
                setTimeout(function(){
                
                    pErroresIngresoEmail.innerHTML = 'Campo vacío'
                    pErroresIngresoEmail.style.opacity = "1"
                    
                },200)

            } else {
                pErroresIngresoEmail.innerHTML = 'Campo vacío'
                pErroresIngresoEmail.style.opacity = "1"
            }
            

        } else if (e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === null && !e.target.classList.contains('no-es-un-correo')) {

            inputEmail.classList.remove('is-valid')
            inputEmail.classList.add('no-es-un-correo')
            inputEmail.classList.add('is-invalid')
            pErroresIngresoEmail.style.opacity = "0"
            if (pErroresIngresoEmail.innerHTML) {  //Si el div TIENE contenido hago fade-out y luego fade-in
                setTimeout(function(){

                    pErroresIngresoEmail.innerHTML = 'No es un correo'
                    pErroresIngresoEmail.style.opacity = "1"

                },200)

            } else {  //Si el div NO tiene contenido hago SOLO fade-in
                pErroresIngresoEmail.innerHTML = 'No es un correo'
                pErroresIngresoEmail.style.opacity = "1"
            }
              
            
            
        } else if (e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === null && e.target.classList.contains('no-es-un-correo')) {
            // no se ejecuta ningun cambio para que la animacion no se muestre cada vez que se teclea algo
        } else {

            inputEmail.classList.remove('is-invalid')
            inputEmail.classList.remove('no-es-un-correo')
            inputEmail.classList.add('is-valid')
            pErroresIngresoEmail.innerHTML = ''
            pErroresIngresoEmail.style.opacity = "0"
        }
    })


    inputPassword.addEventListener("input", (e) =>{

        if(e.target.value === '') {

            inputPassword.classList.add('is-invalid')
            inputPassword.classList.remove('is-valid')
            pErroresIngresoPassword.style.opacity = "1"
            pErroresIngresoPassword.innerHTML = 'Campo vacío'

        } else {
            
            inputPassword.classList.remove('is-invalid')
            inputPassword.classList.add('is-valid')
            pErroresIngresoPassword.style.opacity = "0"

        }
    })


    form.addEventListener('submit', (e) => {
        
        let inputInvalid = document.querySelector('.is-invalid')
        if (inputInvalid === null) {
            e.preventDefault()

            fetch('http://localhost:3001/users/validation/'+inputEmail.value+'/'+inputPassword.value)
                .then((response) => {
                    
                    return response.json();                
                })
                .then((dataDecode) => {
                     
                    if (dataDecode.email && dataDecode.pass) {

                        form.submit() 

                    } else {
                         
                        inputEmail.classList.remove('is-valid')
                        inputPassword.classList.remove('is-valid')
                        inputEmail.classList.add('is-invalid')
                        inputPassword.classList.add('is-invalid')
                        inputPassword.value = ''
                        pErroresIngresoEmail.innerHTML = 'Usuario o contraseña incorrectos'
                        pErroresIngresoEmail.style.opacity = "1"
                        pErroresIngresoEmail.style.marginLeft = "14%"
                    }
                     
                })
                .catch((e) => {
                    alert("hubo un error")
                });
            
        } else {
            e.preventDefault()
            inputInvalid.focus()
        }
    })

    
})

