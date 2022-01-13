<template>
    <div>
        <h1 class="text-center"><b>Agregar</b></h1>

        <form @submit.prevent="agregarTarea(nombre)"  class="row gy-2 gx-3 align-items-center">

              <div class="col-auto">
    
                <div class="input-group">
                <div class="input-group-text">Nombre</div>
                <input type="text" class="form-control" v-model="nombre">
                </div>
             </div>
   
            <div class="col-auto">
                <button type="submit" class="btn btn-primary">Agregar</button>
            </div>
        </form>
    </div>
</template>
<script>
    import {
        mapActions
    } from 'vuex'
    export default {
        name: "Agregar",
        data() {
            return {
                nombre: ''
            }
        },
        methods: {
            ...mapActions(['agregarTarea'])
        }

    }
</script>