import React from "react";
import { connect } from "react-redux";

function ReduxApp({ tienda, cliente, enviarAlCliente, retornarALaTienda }) {
  return (
    <React.Fragment>
      <div className="container p-2">
        <div className="row">
          <div className="col">
            <h2>Tienda</h2>
            {tienda.map((item, i) => (
              <div className="card" key={i}>
                <div className="card-body d-flex">
                  {item}
                  <button
                    className="btn btn-primary ms-auto"
                    onClick={() => enviarAlCliente(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col">
            <h2>Cliente</h2>
            {cliente.map((item, i) => (
              <div className="card" key={i}>
                <div className="card-body d-flex">
                  {item}
                  <button
                    className="btn btn-secondary ms-auto"
                    onClick={() => retornarALaTienda(item)}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  tienda: state.tienda,
  cliente: state.cliente,
});

const mapDispatchToProps = (dispatch) => ({
  enviarAlCliente: (data) =>
    dispatch({ type: "ENVIAR_AL_CLIENTE", payload: data }),

  retornarALaTienda: (data) =>
    dispatch({ type: "RETORNAR_A_LA_TIENDA", payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp);