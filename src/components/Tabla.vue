<template>
  <div class="contenedor">
    <div class="tabla">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Cedula</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="est in estudiantes" :key="est.id">
                <td>{{est.id}}</td>
                <td>{{est.nombre}}</td>
                <td>{{est.apellido}}</td>
                <td>{{est.cedula}}</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        estudiantes:{
            require:true
        }
    }
};
</script>

<style scoped>


table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin: 20px;
  box-shadow: 20px 20px 20px -20px ;
  
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
