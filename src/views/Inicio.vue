<template lang="">
<h1>INICIO</h1>

<!-- {{carga}} -->

<div class="d-grid gap-2 col-6 mx-auto">

<router-link to="/agregar" class="btn btn-success btn-block " >Agregar
</router-link>
</div>
<br>

<div v-if="carga" class="text-center"> <h1>cargado contenido....</h1>
<pulse-loader :loading="loading" ></pulse-loader>

</div>



    <ul class="list-group" v-if="!carga">
        <li class="list-group-item" v-for="(item,index) in tareas" :key="index">
            {{item.nombre}} - {{item.id}}
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <router-link class="btn btn-warning btn-sm me-md-2" :to="{name:'Editar', params:{id: item.id}}">
         Editar
                   </router-link>
                   <button class="btn btn-danger btn-sm mr-2 " @click="eliminarTarea(item.id)">Eliminar</button>
          </div>
        </li>
    </ul>

    <!-- <p>{{usuario.email}}</p> -->
</template>
<script>

import {mapActions, mapState} from 'vuex'
import PulseLoader from 'vue-spinner/src/ScaleLoader.vue'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'


export default {
    name: ' Inicio',
    created() {
        this.getTareas()
    },
    methods: {
        // get tareas la llamo para iniciarla en created y poder llamar las tareas del state 
        ...mapActions(['getTareas','eliminarTarea'])
    },
    computed:{
        ...mapState(['tareas', 'usuario', 'carga'])
        },
        components:{
            PulseLoader
        }
       
}
</script>
