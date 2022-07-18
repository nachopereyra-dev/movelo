import React from 'react';
import TotalServicesInDb from './TotalServicesInDb'
import TotalUsersInDb from './TotalUsersInDb'
import ServiciosLocalesInDb from './ServiciosLocalesInDb'
import ServiciosInternacionalesInDb from './ServiciosInternacionalesInDb'

function PanelInfoGeneral(){
    return (

        <div className="row">

            <div className="col-md-3 mb-3">
            <div className={`card border-left-dark shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-dark text-uppercase mb-1`}><p>Total de usuarios</p></div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800"><TotalUsersInDb /></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="col-md-3 mb-3">
            <div className={`card border-left-dark shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-dark text-uppercase mb-1`}><p>Total de servicios</p></div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800"><TotalServicesInDb /></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="col-md-3 mb-3">
            <div className={`card border-left-dark shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-dark text-uppercase mb-1`}><p>Total de servicios locales</p></div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800"><ServiciosLocalesInDb /></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="col-md-3 mb-3">
            <div className={`card border-left-dark shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-dark text-uppercase mb-1`}><p>Total de servicios internacionales</p></div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800"><ServiciosInternacionalesInDb /></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
        
    )
}

export default PanelInfoGeneral;