<template lang="">
<div>
 
      <h1>
        Editar
    </h1>

    <form @submit.prevent="editarTarea(tarea)" class="row gy-2 gx-3 align-items-center">

              <div class="col-auto">
    
                <div class="input-group">
                <div class="input-group-text">Nombre</div>
                <input type="text" class="form-control" v-model="v$.tarea.nombre.$model">
                </div>
             </div>
   
            <div class="col-auto">
                <button type="submit" class="btn btn-success" :disabled="v$.tarea.nombre.$invalid || carga ">Actualizar</button>
            </div>
    </form>

       <div class="col-auto">
                 <small class="text-danger d-block " v-if="v$.tarea.nombre.required.$invalid">campo requerido</small><br>
                 <small class="text-danger d-block" v-if="v$.tarea.nombre.$invalid">campo minimo 5 caracteres</small>

                 <!-- <p>{{carga}}</p> -->

                </div>
    {{v$.tarea.nombre}}
</div>
</template>
<script>

import  {mapActions, mapState} from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required, minLength} from '@vuelidate/validators'
export default {
    name: "Editar",
        setup(){    
    return {
        v$: useVuelidate()
    }
    },
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
        ...mapState(['tarea','carga'])
    },

        validations:{
        tarea:{
            nombre:{required, 
            minLength:minLength(5)}
        }

    },

    
}
</script>
<style lang="">
    
</style>