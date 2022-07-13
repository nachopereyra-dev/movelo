window.addEventListener('load', function() {
 
    let inputOrigen = document.querySelector('.origen')
    let errorOrigen = document.querySelector('.error-origen')

    let inputDestino = document.querySelector('.destino')
    let errorDestino = document.querySelector('.error-destino')
    
    let inputDescripcion = document.querySelector('.descripcion')
    let errorDescripcion = document.querySelector('.error-descripcion')



    inputOrigen.classList.add('is-invalid')
    inputDestino.classList.add('is-invalid')
    inputDescripcion.classList.add('is-invalid')

    inputOrigen.addEventListener('input', (e) => {

        if (e.target.value.length >= 3) {
            
            inputOrigen.classList.remove('is-invalid')
            inputOrigen.classList.add('is-valid')
            errorOrigen.innerHTML = ''

        } else {

            inputOrigen.classList.remove('is-valid')
            inputOrigen.classList.add('is-invalid')
            errorOrigen.innerHTML = 'Mínimo 3 caracteres'
        }
    })


    inputDestino.addEventListener('input', (e) => {

        if (e.target.value.length >= 3) {

            inputDestino.classList.remove('is-invalid')
            inputDestino.classList.add('is-valid')
            errorDestino.innerHTML = ''

        } else {

            inputDestino.classList.remove('is-valid')
            inputDestino.classList.add('is-invalid')
            errorDestino.innerHTML = 'Mínimo 3 caracteres'
        }
    })


    inputDescripcion.addEventListener('input', (e) => {

        if (e.target.value.length >= 20) {

            inputDescripcion.classList.remove('is-invalid')
            inputDescripcion.classList.add('is-valid')
            errorDescripcion.innerHTML = ''

        } else {

            inputDescripcion.classList.remove('is-valid')
            inputDescripcion.classList.add('is-invalid')
            errorDescripcion.innerHTML = 'Mínimo 20 caracteres'
        }
    })

    form.addEventListener('submit', (e) => {
        
        let inputValidar = document.querySelector('.is-invalid')

        if (inputValidar !== null) {
            e.preventDefault()
        } 
    })






})

