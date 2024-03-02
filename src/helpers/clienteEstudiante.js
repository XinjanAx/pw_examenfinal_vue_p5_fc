import axios from "axios";

const consultar = async(id)=>{
    const data = axios.get("http://localhost:8081/API/v1.0/examen/estudiantes/"+id).then(ret => ret.data);
    return data;
}
const consultarTodos = async()=>{
    const data = axios.get("http://localhost:8081/API/v1.0/examen/estudiantes").then(ret => ret.data);
    return data;
}

const insertar = async(body)=>{
    axios.post("http://localhost:8081/API/v1.0/examen/estudiantes",body).then(ret => ret.data);
}


export const consultarFachada = async(id)=>{
    return await consultar(id);
}

export const insertarFachada = async(body)=>{
    await insertar(body);
}

export const consultarTodosFachada = async()=>{
    return await consultarTodos();
}