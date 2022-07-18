import React, { Component } from "react";

class serviciosInternacionales extends Component {

    constructor(props) {
        super(props)
        this.state = {
            serviciosInternacionales: ''
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
        .then( response => response.json())
        .then( data => consecuencia(data))
        .catch( error => console.log(error))
    }

    componentDidMount() {
        this.traerServiciosInternacionales()
    }

    traerServiciosInternacionales() {
        this.apiCall('http://localhost:3001/api/servicios', this.mostrarCantidadServiciosInternacionales)
    }

    mostrarCantidadServiciosInternacionales = (data) => {
        this.setState(
            {
                serviciosInternacionales: data.countByCategory.serviciosInternacionales
            }
        )
    }

    componentDidUpdate() {

    }

    render() {

        let contenido

        if(this.state.serviciosInternacionales === '') {
            contenido = <p>Cargando envios...</p>
        } else {
            contenido = <p>{this.state.serviciosInternacionales}</p>
        }

        return (
            <div>
                {contenido}
            </div>
        )
    }
}

export default serviciosInternacionales;