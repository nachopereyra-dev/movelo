import React, { Component } from "react";

class frecuenciaServiciosDiaria extends Component {

    constructor(props) {
        super(props)
        this.state = {
            frecuenciaServiciosDiaria: ''
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
        .then( response => response.json())
        .then( data => consecuencia(data))
        .catch( error => console.log(error))
    }

    componentDidMount() {
        this.traerFrecuenciaServiciosDiaria()
    }

    traerFrecuenciaServiciosDiaria() {
        this.apiCall('http://localhost:3001/api/servicios', this.mostrarFrecuenciaServiciosDiaria)
    }

    mostrarFrecuenciaServiciosDiaria = (data) => {
        this.setState(
            {
                frecuenciaServiciosDiaria: data.countByFrequency.frecuenciaDiaria
            }
        )
    }

    componentDidUpdate() {

    }

    render() {

        let contenido

        if(this.state.frecuenciaServiciosDiaria === '') {
            contenido = <p>Cargando envios...</p>
        } else {
            contenido = <p>{this.state.frecuenciaServiciosDiaria}</p>
        }

        return (
            <div>
                {contenido}
            </div>
        )
    }
}

export default frecuenciaServiciosDiaria;