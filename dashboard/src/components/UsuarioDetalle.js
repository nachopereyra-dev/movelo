import React from 'react';
import {useState,useEffect} from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';




function UsuarioDetalle(props){
    const [usuario, setUsuario] = useState([]);

    
    useEffect(() =>{
        fetch('http://localhost:3001/api/users/10')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(usuarios =>{
                setUsuario(usuarios.data[usuarios.data.length-1])
            })
            .catch(error => console.log(error))
    }, [])
    
    return (    
        <>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último Servicio Regsitrado</h5>
                    </div>
                    <div className="card-body">
                            <h5>Desde - {usuario.origen} Hacia - {usuario.destination} </h5>
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                        </div>
                        <p>{usuario.description}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                    </div>
                </div>
            </div>   
        </>     
    )
}
export default UsuarioDetalle;