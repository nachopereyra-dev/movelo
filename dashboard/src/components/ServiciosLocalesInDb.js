import React, { Component } from "react";

class serviciosLocales extends Component {

    constructor(props) {
        super(props)
        this.state = {
            serviciosLocales: ''
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
        .then( response => response.json())
        .then( data => consecuencia(data))
        .catch( error => console.log(error))
    }

    componentDidMount() {
        this.traerServiciosLocales()
    }

    traerServiciosLocales() {
        this.apiCall('http://localhost:3001/api/servicios', this.mostrarCantidadServiciosLocales)
    }

    mostrarCantidadServiciosLocales = (data) => {
        this.setState(
            {
                serviciosLocales: data.countByCategory.serviciosLocales
            }
        )
    }

    componentDidUpdate() {

    }

    render() {

        let contenido

        if(this.state.serviciosLocales === '') {
            contenido = <p>Cargando envios...</p>
        } else {
            contenido = <p>{this.state.serviciosLocales}</p>
        }

        return (
            <div>
                {contenido}
            </div>
        )
    }
}

export default serviciosLocales;