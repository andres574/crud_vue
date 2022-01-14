<template >
    <div>
        <h1 class="text-center">registro usuarios</h1>
    </div>

      <form @submit.prevent="CrearUsuario({email:email, password:password})"  class="row gy-2 gx-3 align-items-center">

              <div class="col-auto">
    
                <div class="input-group">
                <div class="input-group-text">Email</div>
                <input type="text" class="form-control" v-model="v$.email.$model" :class="{'is-invalid':v$.email.$error}">
                </div>
             </div>
                <p class="text-danger" v-if="v$.email.$error">Este email es incorrecto</p>

              <div class="col-auto">
    
                <div class="input-group">
                <div class="input-group-text">password</div>
                <input type="password" class="form-control" v-model="v$.password.$model" :class="{'is-invalid':v$.password.$error}">
                <!-- <p>{{v$.password}}</p> -->

                </div>

             </div>

                <p class="text-danger" v-if="v$.password.minLength.$invalid">minimo 6 caracteres</p>

                <div class="col-auto">
    
                <div class="input-group">
                <div class="input-group-text">repeat password</div>
                <input type="password" class="form-control" v-model="password2" :class="{'is-invalid':v$.password2.$error}">
                </div>

             </div>
                <p class="text-danger" v-if="v$.password2.sameAs.$invalid">password no coinciden</p>

   
            <div class="col-auto text-center">
                <button type="submit" class="btn btn-primary" :disabled="v$.$invalid" >Registrar usuario</button>
            </div>
        </form>
        <div class="alert alert-danger mt-3" role="alert" v-if="error == 'auth/email-already-in-use'">
         <b>Error!</b>  Ya existe un usuario con este correo
        </div>

        <!-- <p>{{}}</p> -->
</template>
<script>

import {mapActions, mapState} from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required, email,sameAs,minLength} from '@vuelidate/validators'
export default {
    name:'registro',
    setup() {
        return{
             v$: useVuelidate()
        }
    },
    data(){
        return{
            email:'',
        password:'',
        password2:''
        }
            },
        created(){

        },
         validations(){
      return{
            email:{required,email},

        password: {
        minLength:minLength(6)
        },
        password2: {sameAs: sameAs(this.password)}
      }
        

    },
        methods: {
            ...mapActions(['CrearUsuario'])
        },
        computed:{
            ...mapState(['error']),
            // desactivar(){
            //     return this.password === this.password2 && this.password.trim() !== '' && this.password.length > 5
            // }
        }

    
}
</script>
<style >
    
</style>