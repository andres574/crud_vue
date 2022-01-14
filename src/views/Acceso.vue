<template >
    <div>
        <h1><b>ACCESO DE USUARIOS</b></h1>


        <form @submit.prevent="IngresoUsuario({email:email, password:password})"  class="row gy-2 gx-3 align-items-center">

              <div class="col-auto">
    
                <div class="input-group">
                <div class="input-group-text">Email</div>
                <input type="text" class="form-control" v-model="v$.email.$model" placeholder="Ingrese email"
                :class="{'is-invalid':v$.email.$error}" >
                </div>

             </div>
                <p class="text-danger" v-if="v$.email.$error">Este email es incorrecto</p>
                <!-- <p class="text-danger" v-if="v$.email.required.$invalid">Este campo es requerido</p> -->

              <div class="col-auto">
    
                <div class="input-group">
                <div class="input-group-text">password</div>
                <input type="password" class="form-control" v-model="v$.password.$model" placeholder="Ingrese password">
                </div>
             </div>

         
   
            <div class="col-auto text-center">
                <button type="submit" class="btn btn-primary" :disabled="v$.$invalid ">Login</button>
            </div>


        </form>
                <p class="text-danger" v-if="v$.password.$error">minimo 5 caracteres para password</p>


    </div>
<div class="alert alert-danger mt-3" role="alert" v-if="error == 'auth/wrong-password'">
 <b>Error!</b>  password incorrecto
</div>
<div class="alert alert-danger mt-3" role="alert" v-if="error == 'auth/user-not-found'">
 <b>Error!</b>  usuario incorrecto
</div>
 

</template>
<script>
import {mapActions, mapState} from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength} from '@vuelidate/validators'


export default {
    name:'Acceso',
    setup(){    
    return {
        v$: useVuelidate()
    }
    },
    data(){
        return{
            email:'',
            password:'',
        }
    },
    validations:{
        email:{required,email},
        password:{required,
         minLength:minLength(5)}

    },
    methods:{
        ...mapActions(['IngresoUsuario'])
    },
    computed:{
        ...mapState(['error','carga'])
    }
    
}
</script>
<style lang="">
    
</style>