import React from "react";


function PanelGeneralPrincipal() {
  return (
    <div className="d-flex justify-content-around row">

      <div className="card bg-secondary text-white shadow col-md-5 mb-5">

        <div className="card-header bg-secondary py-3">
          <h5 className="m-0 font-weight-bold text-white-800">
            Usuarios en base de datos
          </h5>
        </div>

        <div className="card-body">

          <div className="row">

          <div className="col-lg-6 mb-4">
          
              <div className="card bg-white text-dark shadow">
                  
                <div className="card-body">Usuario 1</div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card bg-white text-dark shadow">
                <div className="card-body">Usuario 2</div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card bg-white text-dark shadow">
                <div className="card-body">Usuario 3</div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card bg-white text-dark shadow">
                <div className="card-body">Usuario 4</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="card bg-secondary text-white shadow col-md-5 mb-5">

        <div className="card-header bg-secondary py-3">
          <h5 className="m-0 font-weight-bold text-white-800">
            Servicios en base de datos
          </h5>
        </div>

        <div className="card-body">

          <div className="row">

          <div className="col-lg-6 mb-4">
          
                <div className="card bg-white text-dark shadow">
                  
                <div className="card-body">Servicio 1</div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
                <div className="card bg-white text-dark shadow">
                <div className="card-body">Servicio 2</div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
                <div className="card bg-white text-dark shadow">
                <div className="card-body">Servicio 3</div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
                <div className="card bg-white text-dark shadow">
                <div className="card-body">Servicio 4</div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

    
  );
}

export default PanelGeneralPrincipal;