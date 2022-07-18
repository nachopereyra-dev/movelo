import React from 'react';
import FrecuenciaServiciosDiaria from './FrecuenciaServiciosDiariaInDb';
import FrecuenciaServiciosSemanal from './FrecuenciaServiciosSemanalInDb';
import FrecuenciaServiciosMensual from './FrecuenciaServiciosMensualInDb';

function PanelFrecuenciaServicios(){
    return (

        <div className="row">

            <div className="col-md-4 mb-4">
            <div className={`card border-left-dark shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-dark text-uppercase mb-1`}><p>Total de servicios diarios</p></div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800"><FrecuenciaServiciosDiaria /></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="col-md-4 mb-4">
            <div className={`card border-left-dark shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-dark text-uppercase mb-1`}><p>Total de servicios semanales</p></div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800"><FrecuenciaServiciosSemanal /></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="col-md-4 mb-4">
            <div className={`card border-left-dark shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-dark text-uppercase mb-1`}><p>Total de servicios mensuales</p></div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800"><FrecuenciaServiciosMensual /></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
        
    )
}

export default PanelFrecuenciaServicios;