<template>
    <div class="nav">
        <router-link to="/token">Token</router-link>       
        <router-link to="/estudiante">Estudiante</router-link>
    </div>

</template>

<script>
export default {

}
</script>

<style>
.nav{
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.16);
    padding: 10px 0;
    
}

.nav a{
  color: rgb(0, 0, 0);
  margin: 0 10px;
  font-weight: bold;
  padding: 10px;
}
.nav a:hover{
    background-color: rgba(0, 0, 0, 0.336);
    color: white;
}

.router-link-exact-active{
    background: rgba(167, 84, 246, 0.26);
}

</style>