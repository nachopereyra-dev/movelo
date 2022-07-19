import React from 'react';
import { useState } from 'react';
import SmallCardDeTotales from './SmallCardDeTotales';


function SeccionContenidoTotales(){
    const [totalUsuarios, setTotalUsuarios] = useState({
        color:   "dark",
        titulo: "Total de Usuarios",
        valor: 0,
        icono: "fas fa-user",
    })
    const [totalServicios, setTotalServicios] = useState({
        color:   "dark",
        titulo: "Servicios Totales",
        valor: 0,
        icono: "fas fa-people-carry",
    })
    
    const [totalServiciosLocales, setTotalServiciosLocales] = useState({
        color:   "dark",
        titulo: "Servicios Locales",
        valor: 0,
        icono: "fas fa-shipping-fast",
    })

    const [totalServiciosInternacionales, setTotalServiciosInternacionales] = useState({
        color:   "dark",
        titulo: "Servicios Internacionales",
        valor: 0,
        icono: "fas fa-globe",
    })

    const totales  = [totalUsuarios, totalServicios, totalServiciosLocales, totalServiciosInternacionales]
     
    useState(() =>{
        fetch('http://localhost:3001/api/users')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(usuarios =>{
                setTotalUsuarios({...totalUsuarios, valor: usuarios.count})
            })
            .catch(error => console.log(error))

        fetch('http://localhost:3001/api/servicios')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(servicios =>{
                setTotalServicios({...totalServicios, valor: servicios.total})
            })
            .catch(error => console.log(error))

        fetch('http://localhost:3001/api/servicios')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(serviciosLocales =>{
                setTotalServiciosLocales({...totalServiciosLocales, valor: serviciosLocales.countByCategory.serviciosLocales})
            })
            .catch(error => console.log(error))
        
        fetch('http://localhost:3001/api/servicios')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(serviciosInternacionales =>{
                setTotalServiciosInternacionales({...totalServiciosInternacionales, valor: serviciosInternacionales.countByCategory.serviciosInternacionales})
            })
            .catch(error => console.log(error))
    }, [])
    
    return (
        <>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                totales.map((producto,index)=>{
                    return <SmallCardDeTotales  {...producto}  key= {index}/>
                })
            }      
        </div>
        </>
    )
}
export default SeccionContenidoTotales;