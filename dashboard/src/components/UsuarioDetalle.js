import React, { useState, useEffect } from 'react';
import  { useParams } from 'react-router-dom';





function UsuarioDetalle(){
    const { id } = useParams()
    const [user, setUser] = useState([])

    useEffect(() =>{
        fetch('http://localhost:3001/api/users/'+id)
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(usuario =>{
                setUser(usuario)
            })
            .catch(error => console.log(error))
    }, [id])
    
    return (    
        <>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Usuario: {user.first_name} {user.last_name}</h5>
                    </div>
                    <div className="card-body">
                            <h5>{user.date}</h5>
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={user.imagen} alt=" Star Wars - Mandalorian "/>
                        </div>
                        <p>{user.gender}</p>
                    </div>
                </div>
            </div>   
        </>     
    )
}
export default UsuarioDetalle;