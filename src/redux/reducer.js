import { createStore } from "redux";

const INITIAL_STATE = {
  tienda: ["Arroz", "Soya", "Coca cola", "Pepsi"],
  cliente: [],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ENVIAR_AL_CLIENTE":
      return {
        tienda: state.tienda.filter((item) => item !== action.payload),
        cliente: [...state.cliente, action.payload],
      };
    case "RETORNAR_A_LA_TIENDA":
      return {
        tienda: [...state.tienda, action.payload],
        cliente: state.cliente.filter((item) => item !== action.payload),
      };

    default:
      return state;
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);