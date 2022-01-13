<template>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" v-if="!existeUsuario" >Acceso</router-link> 
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/registro" class="nav-link active " aria-current="page" v-if="!existeUsuario">Registro</router-link>
        </li>
        <li class="nav-item">
          <button class="nav-link btn btn-outline-danger" @click="cerrarSesion" v-if="existeUsuario">Cerrar sesion</button>
           <!-- <router-link to="/cerrarSesion" class="nav-link ">Cerrar sesion</router-link> -->
        </li>
  
      </ul>
   
    </div>
  </div>
</nav>




  <div id="app" class="container">
<div class="text-center">
     <router-link to="/inicio">
<img alt="vue logo" src="./assets/logo.png" >
    </router-link>
  

</div>
  </div>
  <router-view/>
</template>
<script>
import { mapActions, mapGetters} from 'vuex'

export default ({

methods:{
...mapActions(['cerrarSesion'])
},
computed:{
  ...mapGetters(['existeUsuario'])
},
  setup() {
    
  },
})
</script>


