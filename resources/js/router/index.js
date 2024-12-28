import { createRouter, createWebHistory } from 'vue-router';


import TaskForm from '../Pages/TaskForm.vue';
import UpcomingTasks from '../Pages/UpcomingTasks.vue';

const routes = [
    { path: '/', name: 'task-form', component: TaskForm },
    { path: '/tasks/upcoming', name: 'upcoming-tasks', component: UpcomingTasks },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
