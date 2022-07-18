import React, { Component } from "react";

class frecuenciaServiciosSemanal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            frecuenciaServiciosSemanal: ''
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
        .then( response => response.json())
        .then( data => consecuencia(data))
        .catch( error => console.log(error))
    }

    componentDidMount() {
        this.traerFrecuenciaServiciosSemanal()
    }

    traerFrecuenciaServiciosSemanal() {
        this.apiCall('http://localhost:3001/api/servicios', this.mostrarFrecuenciaServiciosSemanal)
    }

    mostrarFrecuenciaServiciosSemanal = (data) => {
        this.setState(
            {
                frecuenciaServiciosSemanal: data.countByFrequency.frecuenciaSemanal
            }
        )
    }

    componentDidUpdate() {

    }

    render() {

        let contenido

        if(this.state.frecuenciaServiciosSemanal === '') {
            contenido = <p>Cargando envios...</p>
        } else {
            contenido = <p>{this.state.frecuenciaServiciosSemanal}</p>
        }

        return (
            <div>
                {contenido}
            </div>
        )
    }
}

export default frecuenciaServiciosSemanal;