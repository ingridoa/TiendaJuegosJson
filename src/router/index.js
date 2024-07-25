// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeV from '../views/HomeV.vue';
import About from '../views/AboutView.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeV
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  // Agrega más rutas aquí si es necesario
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
