import axios from "axios";

const obtenerTokenFachada = async (bodyUsuario, semilla, tiempo) => {
  return await obtenerToken(bodyUsuario, semilla, tiempo);
};

const obtenerToken = async (bodyUsuario, semilla, tiempo) => {
  try {
    const data = axios
      .post(
        `http://localhost:8082/API/v1.0/Seguridad/tokens/obtener/${semilla}/${tiempo}`,
        bodyUsuario
      )
      .then((r) => r.data);
    return data;
  } catch (e) {
    console.log("no entro");
  }
};


export { obtenerTokenFachada };

