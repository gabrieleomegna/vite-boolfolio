import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue'
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectList
        },
        {
            path: '/projects/:id',
            name: 'projects.show',
            component: SingleProject
        },
    ]
});

export { router }