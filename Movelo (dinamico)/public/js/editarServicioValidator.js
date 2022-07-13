window.addEventListener('load', function() {
 
    let inputOrigen = document.querySelector('.origen')
    let errorOrigen = document.querySelector('.error-origen')

    let inputDestino = document.querySelector('.destino')
    let errorDestino = document.querySelector('.error-destino')
    
    let inputDescripcion = document.querySelector('.descripcion')
    let errorDescripcion = document.querySelector('.error-descripcion')

    let form = document.querySelector('.formulario-editar')



    inputOrigen.classList.add('is-valid')
    inputDestino.classList.add('is-valid')
    inputDescripcion.classList.add('is-valid')

    errorOrigen.style.opacity = "0"
    errorDestino.style.opacity = "0"
    errorDescripcion.style.opacity = "0"

    inputOrigen.addEventListener('input', (e) => {

        if (e.target.value === '') {

            inputOrigen.classList.remove('menor-a-3')
            inputOrigen.classList.remove('is-valid')
            inputOrigen.classList.add('is-invalid')
            errorOrigen.style.opacity = "0"
            if (errorOrigen.innerHTML) {
                setTimeout(function(){
                
                    errorOrigen.innerHTML = '* Campo obligatorio'
                    errorOrigen.style.opacity = "1"
                    
                },200) 

            } else {
                errorOrigen.innerHTML = '* Campo obligatorio'
                errorOrigen.style.opacity = "1"
            }

        } else if (e.target.value.length < 3 && !e.target.classList.contains('menor-a-3')) {

            inputOrigen.classList.remove('is-valid')
            inputOrigen.classList.add('is-invalid')
            inputOrigen.classList.add('menor-a-3')
            errorOrigen.style.opacity = "0"
            if (errorOrigen.innerHTML) {
                setTimeout(function(){
                
                    errorOrigen.innerHTML = 'Mínimo 3 caracteres'
                    errorOrigen.style.opacity = "1"
                    
                },200) 

            } else {
                errorOrigen.innerHTML = 'Mínimo 3 caracteres'
                errorOrigen.style.opacity = "1"
            }

        } else if (e.target.value.length < 3 && e.target.classList.contains('menor-a-3')) {
            
        } else {
            
            inputOrigen.classList.remove('menor-a-3')
            inputOrigen.classList.remove('is-invalid')
            inputOrigen.classList.add('is-valid')
            errorOrigen.style.opacity = "0"
            errorOrigen.innerHTML = ''
        }
    })


    inputDestino.addEventListener('input', (e) => {

        if (e.target.value === '') {

            inputDestino.classList.remove('menor-a-3')
            inputDestino.classList.remove('is-valid')
            inputDestino.classList.add('is-invalid')
            errorDestino.style.opacity = "0"
            if (errorDestino.innerHTML) {
                setTimeout(function(){
                
                    errorDestino.innerHTML = '* Campo obligatorio'
                    errorDestino.style.opacity = "1"
                    
                },200) 

            } else {
                errorDestino.innerHTML = '* Campo obligatorio'
                errorDestino.style.opacity = "1"
            }

        } else if (e.target.value.length < 3 && !e.target.classList.contains('menor-a-3')) {

            inputDestino.classList.remove('is-valid')
            inputDestino.classList.add('is-invalid')
            inputDestino.classList.add('menor-a-3')
            errorDestino.style.opacity = "0"
            if (errorDestino.innerHTML) {
                setTimeout(function(){
                
                    errorDestino.innerHTML = 'Mínimo 3 caracteres'
                    errorDestino.style.opacity = "1"
                    
                },200) 

            } else {
                errorDestino.innerHTML = 'Mínimo 3 caracteres'
                errorDestino.style.opacity = "1"
            }

        } else if (e.target.value.length < 3 && e.target.classList.contains('menor-a-3')) {
            
        } else {
            
            inputDestino.classList.remove('menor-a-3')
            inputDestino.classList.remove('is-invalid')
            inputDestino.classList.add('is-valid')
            errorDestino.style.opacity = "0"
            errorDestino.innerHTML = ''
        }
    })


    inputDescripcion.addEventListener('input', (e) => {

        if (e.target.value === '') {

            inputDescripcion.classList.remove('menor-a-20')
            inputDescripcion.classList.remove('is-valid')
            inputDescripcion.classList.add('is-invalid')
            errorDescripcion.style.opacity = "0"
            if (errorDescripcion.innerHTML) {
                setTimeout(function(){
                
                    errorDescripcion.innerHTML = '* Campo obligatorio'
                    errorDescripcion.style.opacity = "1"
                    
                },200) 

            } else {
                errorDescripcion.innerHTML = '* Campo obligatorio'
                errorDescripcion.style.opacity = "1"
            }

        } else if (e.target.value.length < 20 && !e.target.classList.contains('menor-a-20')) {

            inputDescripcion.classList.remove('is-valid')
            inputDescripcion.classList.add('is-invalid')
            inputDescripcion.classList.add('menor-a-20')
            errorDescripcion.style.opacity = "0"
            if (errorDescripcion.innerHTML) {
                setTimeout(function(){
                
                    errorDescripcion.innerHTML = 'Mínimo 20 caracteres'
                    errorDescripcion.style.opacity = "1"
                    
                },200) 

            } else {
                errorDescripcion.innerHTML = 'Mínimo 20 caracteres'
                errorDescripcion.style.opacity = "1"
            }

        } else if (e.target.value.length < 20 && e.target.classList.contains('menor-a-20')) {
            
        } else {
            
            inputDescripcion.classList.remove('menor-a-20')
            inputDescripcion.classList.remove('is-invalid')
            inputDescripcion.classList.add('is-valid')
            errorDescripcion.style.opacity = "0"
            errorDescripcion.innerHTML = ''
        }
    })


    form.addEventListener('submit', (e) => {
        
        let inputInvalidar = document.querySelector('.is-invalid')

        if (inputInvalidar !== null) {
            e.preventDefault()
            inputInvalidar.focus()
        } 
    })
})