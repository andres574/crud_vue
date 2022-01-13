import { createStore } from 'vuex'
import { db, auth } from '../firebase'
import router from '../router'


export default createStore({
    state: {
        tareas: [],
        tarea: { nombre: '', id: ' ' },
        usuario: null,
        error: null

    },
    mutations: {
        setTareas(state, payload) {
            state.tareas = payload
        },
        setTarea(state, payload) {
            state.tarea = payload
        },
        setEliminarTarea(state, payload) {
            state.tareas = state.tareas.filter(item => item.id !== payload)
        },
        setUsuario(state, payload) {
            state.usuario = payload
        },
        setError(state, payload) {
            state.error = payload
        }
    },
    actions: {

        CrearUsuario({ commit }, usuario) {
            auth.createUserWithEmailAndPassword(usuario.email, usuario.password).then(res => {
                console.log(res)
                const usuarioCreado = {
                    email: res.email,
                    uid: res.user.uid,
                }
                db.collection(res.user.email).add({
                    nombre: 'tarea de ejemplo'
                }).then(doc => {
                    commit('setUsuario', usuarioCreado)
                    router.push('/inicio')
                }).catch(error => console.error(error))

            }).catch(error => {
                console.log(error)
                commit('setError', error)

            })

        },
        IngresoUsuario({ commit }, usuario) {
            auth.signInWithEmailAndPassword(usuario.email, usuario.password).then(res => {
                console.log(res)
                const ingresoUsuario = {
                    email: res.user.email,
                    uid: res.user.uid,
                }
                commit('setUsuario', ingresoUsuario)
                router.push('/inicio')
            }).catch(error => {
                console.log(error)
                commit('setError', error)

            })

        },
        cerrarSesion({ commit }) {
            auth.signOut()
                .then(() => {
                    router.push('/')
                })
        },
        detectarUsuario({ commit }, usuario) {
            commit('setUsuario', usuario)
        },
        getTareas({ commit, state }) {

            const tareas = []
            db.collection(state.usuario.email).get()
                .then(res => {
                    res.forEach(doc => {

                        let tarea = doc.data()
                        tarea.id = doc.id
                        tareas.push(tarea)

                    })
                    commit('setTareas', tareas)
                })
        },

        getTarea({ commit, state }, idTarea) {
            db.collection(state.usuario.email).doc(idTarea).get()
                .then(doc => {
                    console.log(doc.id)
                    console.log(doc.data())
                    let tarea = doc.data()
                    tarea.id = doc.id
                    commit('setTarea', tarea)
                })
        },
        editarTarea({ commit, state }, tarea) {
            db.collection(state.usuario.email).doc(tarea.id).update({
                    nombre: tarea.nombre
                })
                .then(() => {
                    console.log('tarea editada')
                    router.push('/inicio')
                })
        },
        agregarTarea({ commit, state }, nombreTarea) {
            db.collection(state.usuario.email).add({
                    nombre: nombreTarea
                })
                .then(doc => {
                    router.push('/inicio')

                })
        },
        eliminarTarea({ commit, dispatch, state }, idTarea) {
            db.collection(state.usuario.email).doc(idTarea).delete()
                .then(() => {
                    console.log('Tarea eliminada')
                        // dispatch('getTareas')
                    commit('setEliminarTarea', idTarea)
                })
        }
    },
    getters: {

        existeUsuario(state) {
            if (state.usuario === null) {
                return false;
            } else {
                return true;
            }
        }
    },
    modules: {}
})