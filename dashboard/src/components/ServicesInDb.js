import React, {Component} from "react";

class Services extends Component {

    constructor(props) {
        super(props)
        this.state = {
            service: {
                serviceId: '',
                serviceOrigen: '',
                serviceDestination: '',
                serviceDetail: ''
            }
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
        .then( response => response.json())
        .then( data => consecuencia(data))
        .catch( error => console.log(error))
    }

    componentDidMount() {
        this.traerListaServicios()
    }

    traerListaServicios() {
        this.apiCall('http://localhost:3001/api/users', this.mostrarListaServicios)
    }

    mostrarListaServicios = (data) => {
        this.setState(
            {
                service: {
                    serviceId: data.data.id_service,
                    serviceOrigen: data.data.origen,
                    serviceDestination: data.data.destination,
                    serviceDetail: data.data.detail
                }
            }
        )
    }

    componentDidUpdate() {

    }

    render() {

        let contenido

        if(this.state.service === '') {
            contenido = <p>Cargando servicios...</p>
        } else {
            contenido = <p>{this.state.service}</p>
        }

        return (
            <div>
                {contenido}
            </div>
        )
    }
}

export default Services