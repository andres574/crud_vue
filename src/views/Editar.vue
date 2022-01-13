<template lang="">
<div>
 
      <h1>
        Editar
    </h1>

    <form @submit.prevent="editarTarea(tarea)" class="row gy-2 gx-3 align-items-center">

              <div class="col-auto">
    
                <div class="input-group">
                <div class="input-group-text">Nombre</div>
                <input type="text" class="form-control" v-model="tarea.nombre">
                </div>
             </div>
   
            <div class="col-auto">
                <button type="submit" class="btn btn-success">Actualizar</button>
            </div>





    </form>
</div>
</template>
<script>

import  {mapActions, mapState} from 'vuex'
export default {
    name: "Editar",
    data(){
        return {
            id: this.$route.params.id
        }
    },
    created(){
        this.getTarea(this.id)

    },
    methods:{
        ...mapActions(['getTarea','editarTarea'])
    },
    computed:{
        ...mapState(['tarea'])
    }
    
}
</script>
<style lang="">
    
</style>