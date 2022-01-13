<template >
    <div>
        <h1 class="text-center">registro usuarios</h1>
    </div>

      <form @submit.prevent="CrearUsuario({email:email, password:password})"  class="row gy-2 gx-3 align-items-center">

              <div class="col-auto">
    
                <div class="input-group">
                <div class="input-group-text">Email</div>
                <input type="text" class="form-control" v-model="email">
                </div>
             </div>
              <div class="col-auto">
    
                <div class="input-group">
                <div class="input-group-text">password</div>
                <input type="password" class="form-control" v-model="password">
                </div>
             </div>

                <div class="col-auto">
    
                <div class="input-group">
                <div class="input-group-text">repeat password</div>
                <input type="password" class="form-control" v-model="password2">
                </div>
             </div>
   
            <div class="col-auto text-center">
                <button type="submit" class="btn btn-primary" :disabled="!desactivar">Registrar usuario</button>
            </div>
        </form>

        <!-- <p>{{error.code}}</p> -->
</template>
<script>

import {mapActions, mapState} from 'vuex'
export default {
    name:'registro',
    data(){
        return{
            email:'',
        password:'',
        password2:''
        }
            },
        created(){

        },
        methods: {
            ...mapActions(['CrearUsuario'])
        },
        computed:{
            ...mapState(['error']),
            desactivar(){
                return this.password === this.password2 && this.password.trim() !== '' && this.password.length > 5
            }
        }

    
}
</script>
<style >
    
</style>