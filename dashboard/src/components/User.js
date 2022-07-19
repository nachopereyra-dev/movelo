import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import UsuarioDetalle from './UsuarioDetalle'



function User(props){

    return (
        <>
            <tr>
                <td>{props.id_user}</td>
                <td>{props.first_name}</td>
                <td>{props.last_name}</td>
                <td>{props.email}</td>
                <td><Link to={'/usuario/'+props.id_user}>Detalle de Usuario</Link></td>
            </tr>
        </>
    )
}

export default User