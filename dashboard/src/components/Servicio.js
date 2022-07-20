import React from 'react';

function Servicio(props){
    return(
        <>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        <p>Desde - {props.origen}</p>
                        <p>Hacia - {props.destination} </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Servicio;