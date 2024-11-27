import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ProductView from './views/ProductView.vue'
import { createPinia } from 'pinia'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/product', component: ProductView },
  ]
  
const router = createRouter({
    history: createWebHistory(),
    routes,
})

const pinia = createPinia()

const app = createApp(App)


app.use(router)
app.use(pinia)


app.mount('#app')
