<template>
    <div>
        <h1 class="text-center"><b>Agregar</b></h1>

        <form @submit.prevent="agregarTarea(nombre)"  class="row gy-2 gx-3 align-items-center">

              <div class="col-auto">
    
                <div class="input-group">
                <div class="input-group-text">Nombre</div>
                <input type="text" class="form-control" v-model="v$.nombre.$model">

                </div>
                

             </div>
            <div class="col-auto">

                <button type="submit" class="btn btn-primary" :disabled="v$.nombre.$invalid  || carga ">Agregar</button>
            </div>
        </form>
        <div class="col-auto">
                 <small class="text-danger d-block " v-if="v$.nombre.required.$invalid">campo requerido</small><br>
                 <small class="text-danger d-block" v-if="v$.nombre.$invalid">campo minimo 5 caracteres</small>

                 <!-- <p>{{carga}}</p> -->

                </div>
                
    </div>
</template>
<script>

    import {mapActions,mapState} from 'vuex'
    import useVuelidate from '@vuelidate/core'
    import { required, minLength} from '@vuelidate/validators'

    export default {
        name: "Agregar",
          setup(){    
    return {
        v$: useVuelidate()
    }
    },
        data() {
            return {
                nombre: ''
            }
        },
        methods: {
            ...mapActions(['agregarTarea'])
        }, computed:{
            ...mapState(['carga'])
        },

        validations:{
        nombre:{required, 
        minLength: minLength(5)}

    },


    }
</script>