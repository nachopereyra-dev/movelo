import React, { Component } from "react";

class totalServices extends Component {

    constructor(props) {
        super(props)
        this.state = {
            services: ''
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
        .then( response => response.json())
        .then( data => consecuencia(data))
        .catch( error => console.log(error))
    }

    componentDidMount() {
        this.traerServicios()
    }

    traerServicios() {
        this.apiCall('http://localhost:3001/api/servicios', this.mostrarCantidadServicios)
    }

    mostrarCantidadServicios = (data) => {
        this.setState(
            {
                services: data.total
            }
        )
    }

    componentDidUpdate() {

    }

    render() {

        let contenido

        if(this.state.services === '') {
            contenido = <p>Cargando servicio...</p>
        } else {
            contenido = <p>{this.state.services}</p>
        }

        return (
            <div>
                {contenido}
            </div>
        )
    }
}

export default totalServices;