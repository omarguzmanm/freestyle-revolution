import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import createPersistedState from 'pinia-plugin-persistedstate'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import './index.css'

declare global {
    interface Window {
        axios: typeof axios;
    }
}

window.axios = axios
window.axios.defaults.baseURL = 'http://127.0.0.1:8000'
window.axios.defaults.headers.common['Accept'] = 'application/json'
window.axios.defaults.headers.common['Content-Type'] = 'application/json'
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.withCredentials = true

const pinia = createPinia()
pinia.use(({ store }) => { store.router = markRaw(router) })

pinia.use(createPersistedState)

createApp(App).use(router).use(pinia).mount('#app')
