window.addEventListener('load', function() {
 

    // Login

    let inputEmail = document.querySelector('.emailLogin')
    let inputPassword = document.querySelector('.passwordLogin')

    let formIngreso = document.querySelector('.formulario-ingreso')

    let ulErroresIngreso = document.querySelector('.erroresIngreso')
    let pErroresIngresoEmail = document.querySelector('.erroresIngresoEmail')

    inputEmail.addEventListener("change", () =>{
        console.log(inputEmail.value)
        console.log(inputEmail.type)
        if (inputEmail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) { 
            inputEmail.classList.remove('is-invalid')
            inputEmail.classList.add('is-valid')
            pErroresIngresoEmail.innerHTML = ''

        } else {
                inputEmail.classList.add('is-invalid')
                inputEmail.classList.remove('is-valid')
                pErroresIngresoEmail.classList.add('alert-warning')
                pErroresIngresoEmail.innerHTML = 'Campo vacío'
            }
    })

//     formIngreso.addEventListener('submit', (e) => {
//         e.preventDefault();

//         let errores = []

//         if(inputEmail.value === '' || inputEmail.type !== 'email') {
//             inputEmail.classList.add('is-invalid')
//             pErroresIngresoEmail.classList.add('alert-warning')
//             pErroresIngresoEmail.innerHTML += 'Correo inválido'
//             //errores.push('Debes introducir un correo electronico valido')
//         } else {
//             inputEmail.classList.remove('is-invalid')
//             inputEmail.classList.add('is-valid')
//         }

//         if(inputPassword.value === '') {
//             inputPassword.classList.add('is-invalid')
//             errores.push('Debes introducir un password correcto')
//         } else {
//             {
//                 inputPassword.classList.remove('is-invalid')
//                 inputPassword.classList.add('is-valid')
//             }
//         }

//         ulErroresIngreso.innerHTML = ''
//         if(errores.length > 0) {
//             ulErroresIngreso.classList.add('alert-warning')
//             for(let i = 0; i < errores.length; i++) {
//                 ulErroresIngreso.innerHTML += '<ul>' + errores[i] + '</ul>'
//             }
//         } else {
//             formIngreso.submit()
//         }

// })
})