window.addEventListener('load', function() {
 
    // Login

    let inputEmail = document.querySelector('.emailLogin')
    let pErroresIngresoEmail = document.querySelector('.erroresIngresoEmail')

    let inputPassword = document.querySelector('.passwordLogin')
    let pErroresIngresoPassword = document.querySelector('.erroresIngresoPassword')

    let form = document.querySelector('.formulario-ingreso')
    
    

    inputEmail.addEventListener("blur", () =>{
        
        if (inputEmail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            
            inputEmail.classList.remove('is-invalid')
            inputEmail.classList.add('is-valid')
            pErroresIngresoEmail.innerHTML = ''

        } else if (inputEmail.value === '') {
            
            inputEmail.classList.add('is-invalid')
            inputEmail.classList.remove('is-valid')
            pErroresIngresoEmail.classList.add('alert-warning')
            pErroresIngresoEmail.innerHTML = 'Campo vacío'

        } else {
            
            inputEmail.classList.add('is-invalid')
            inputEmail.classList.remove('is-valid')
            pErroresIngresoEmail.classList.add('alert-warning')
            pErroresIngresoEmail.innerHTML = 'No es un correo'    
        }
    })


    inputPassword.addEventListener("input", (e) =>{

        if(e.target.value === '') {

            inputPassword.classList.add('is-invalid')
            inputPassword.classList.remove('is-valid')
            pErroresIngresoPassword.classList.add('alert-warning')
            pErroresIngresoPassword.innerHTML = 'Campo vacío'

        } else {
            
            inputPassword.classList.remove('is-invalid')
            inputPassword.classList.add('is-valid')
            pErroresIngresoPassword.innerHTML = ''
            
        }
    })


    form.addEventListener('submit', (e) => {
        
        let inputValidar = document.querySelector('.is-invalid')

        if (inputValidar !== null) {
            e.preventDefault()
        } 
    })

    
})

