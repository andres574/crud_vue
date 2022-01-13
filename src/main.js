import Vue from "vue";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from "./firebase"


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'



auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user)
        const detUsuario = {
            email: user.email,
            uid: user.uid
        }
        store.dispatch('detectarUsuario', detUsuario)
    } else {
        console.log(user)
        store.dispatch('detectarUsuario', user)

    }
})

createApp(App).use(store).use(router).mount('#app')