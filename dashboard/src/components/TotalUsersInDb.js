import React, { Component } from "react";

class totalUsers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: ''
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
        .then( response => response.json())
        .then( data => consecuencia(data))
        .catch( error => console.log(error))
    }

    componentDidMount() {
        this.traerUsuarios()
    }

    traerUsuarios() {
        this.apiCall('http://localhost:3001/api/users', this.mostrarCantidadUsuarios)
    }

    mostrarCantidadUsuarios = (data) => {
        this.setState(
            {
                users: data.count
            }
        )
    }

    componentDidUpdate() {

    }

    render() {

        let contenido

        if(this.state.users === '') {
            contenido = <p>Cargando usuarios...</p>
        } else {
            contenido = <p>{this.state.users}</p>
        }

        return (
            <div>
                {contenido}
            </div>
        )
    }
}

export default totalUsers;