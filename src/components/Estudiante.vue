<template>
    <h2>Ingresar</h2>
    <div class="contenedor">
        <div class="form">
            <p  type="Token"><input class="token" v-model="token" type="text"></p>
            <p type="Nombre"><input v-model="estudiante.nombre" type="text"></p>
            <p type="Apellido"><input v-model="estudiante.apellido" type="text"></p>
            <p type="Cedula"><input v-model="estudiante.cedula" type="text"></p>

            <button @click="insertar(),$emit('bena')" >Guardar</button>

            <p v-if="show">Se guardo exitosamente</p>

        </div>
        
    </div>
</template>

<script>
import {insertarFachada} from "../helpers/clienteEstudiante"

export default {
    
    data(){
        return{
            token:null,
            estudiante:{
                nombre:null,
                apellido:null,
                cedula:null
            },
            show:false
        }
    },
    methods:{
        async insertar(){
            await insertarFachada(this.estudiante);
            this.show=true;
            setTimeout(() => {this.show=false}, 3000);
            
        }
    }
    
    

}
</script>

<style >
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
    border-radius: 10px;
    height: 10vmin;
    margin: 2vmin;
}
button{
    margin-bottom: 10px;
}

</style>