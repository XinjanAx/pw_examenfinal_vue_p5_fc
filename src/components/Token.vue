<template>
    <div class="contenedor">
        <div class="form">
            <p type="Semilla"><input v-model="semilla" type="text"></p>
            <p type="Tiempo de vigencia"><input v-model="tiempo" type="text"></p>
            <p class="token" type="Token">{{token}}</p>
            <button @click="getToken()">Generar</button>
        </div>
        
    </div>
  
</template>

<script>
import { obtenerTokenFachada } from "@/helpers/clienteAuth";
export default {
  data() {
    return {
      semilla: "",
      token: "",
      tiempo: 0,
    };
  },
  methods: {
    async getToken() {
      const usuario = {
        nombre: "alex",
        contrasenia: "1234",
      };

      const d = await obtenerTokenFachada(
        usuario,
        this.semilla,
        parseInt(this.tiempo)
      );
      this.token = d;
    },
  },
};
</script>

<style>
.contenedor{
    display: flex;
    justify-content: center;
}
.form{
    width: 40vmin;
    border-radius: 10px;
    background-color: rgba(137, 43, 226, 0.093);
    box-shadow: 20px 20px 20px -20px ;

}
input{
    background-color: rgba(0, 0, 0, 0);
    border-radius: 5px;
    border: 0.1rem solid black;
}
p:before{
    content: attr(type);
    display: block;
    margin: 5px 2px;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 10px;

}
.token{
    border: 0.1rem solid black;
    border-radius: 10px;
    height: 10vmin;
    margin: 2vmin;
}
button{
    margin-bottom: 10px;
}
</style>