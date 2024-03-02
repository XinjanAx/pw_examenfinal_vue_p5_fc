<template>
    <h2>Estudiante</h2>
    <Estudiante @bena ="consultar()"/>
    <Tabla :estudiantes="listaEstudiantes"/>
</template>

<script>
import { consultarTodosFachada } from "@/helpers/clienteEstudiante";
import Estudiante from '@/components/Estudiante.vue'
import Tabla from '@/components/Tabla.vue'
export default {
  components: { 
    Estudiante, 
    Tabla 
    },
    data(){
        return{
            listaEstudiantes:null
        }
    },
    methods:{
        async consultar(){
            setTimeout(async () => {this.listaEstudiantes  = await consultarTodosFachada()}, 500);
        }
    }

}
</script>

<style>

</style>