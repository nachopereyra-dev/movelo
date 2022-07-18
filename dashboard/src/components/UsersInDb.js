import React, {Component} from "react";

class Users extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {
                userId: '',
                userFirstName: '',
                userLastName: '',
                userEmail: '',
                userDetail: ''
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
        this.traerListaUsuarios()
    }

    traerListaUsuarios() {
        this.apiCall('http://localhost:3001/api/users', this.mostrarListaUsuarios)
    }

    mostrarListaUsuarios = (data) => {
        this.setState(
            {
                user: {
                    userId: data.data.id_user,
                    userFirstName: data.data.first_name,
                    userLastName: data.data.last_name,
                    userEmail: data.data.email,
                    userDetail: data.data.detail
                }
            }
        )
    }

    componentDidUpdate() {

    }

    render() {

        let contenido

        if(this.state.user === '') {
            contenido = <p>Cargando usuarios...</p>
        } else {
            contenido = <p>{this.state.user}</p>
        }

        return (
            <div>
                {contenido}
            </div>
        )
    }
}

export default Users