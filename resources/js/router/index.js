import { createRouter, createWebHistory } from 'vue-router';


import TaskForm from '../components/TaskForm.vue';

const routes = [
    { path: '/', name: 'task-form', component: TaskForm },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
