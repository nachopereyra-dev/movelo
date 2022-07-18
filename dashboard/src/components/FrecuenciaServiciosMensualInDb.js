import React, { Component } from "react";

class frecuenciaServiciosMensual extends Component {

    constructor(props) {
        super(props)
        this.state = {
            frecuenciaServiciosMensual: ''
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
        .then( response => response.json())
        .then( data => consecuencia(data))
        .catch( error => console.log(error))
    }

    componentDidMount() {
        this.traerFrecuenciaServiciosMensual()
    }

    traerFrecuenciaServiciosMensual() {
        this.apiCall('http://localhost:3001/api/servicios', this.mostrarFrecuenciaServiciosMensual)
    }

    mostrarFrecuenciaServiciosMensual = (data) => {
        this.setState(
            {
                frecuenciaServiciosMensual: data.countByFrequency.frecuenciaMensual
            }
        )
    }

    componentDidUpdate() {

    }

    render() {

        let contenido

        if(this.state.frecuenciaServiciosMensual === '') {
            contenido = <p>Cargando envios...</p>
        } else {
            contenido = <p>{this.state.frecuenciaServiciosMensual}</p>
        }

        return (
            <div>
                {contenido}
            </div>
        )
    }
}

export default frecuenciaServiciosMensual;