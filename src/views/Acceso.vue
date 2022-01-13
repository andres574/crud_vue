<template >
    <div>
        <h1><b>ACCESO DE USUARIOS</b></h1>


        <form @submit.prevent="IngresoUsuario({email:email, password:password})"  class="row gy-2 gx-3 align-items-center">

              <div class="col-auto">
    
                <div class="input-group">
                <div class="input-group-text">Email</div>
                <input type="text" class="form-control" v-model="email" placeholder="Ingrese email">
                </div>
             </div>
              <div class="col-auto">
    
                <div class="input-group">
                <div class="input-group-text">password</div>
                <input type="password" class="form-control" v-model="password" placeholder="Ingrese password">
                </div>
             </div>

         
   
            <div class="col-auto text-center">
                <button type="submit" class="btn btn-primary" >Login</button>
            </div>


        </form>

        <p>{{setError}}</p>


    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'

export default {
    name:'Acceso',
    data(){
        return{
            email:'perezandres574@gmail.com',
            password:'123456',
        }
    },
    methods:{
        ...mapActions(['IngresoUsuario'])
    },
    computed:{
        ...mapState(['setError'])
    }
    
}
</script>
<style lang="">
    
</style>