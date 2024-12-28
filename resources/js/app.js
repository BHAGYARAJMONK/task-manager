import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { InertiaProgress } from '@inertiajs/progress'; // Optional: for a progress bar
import 'bootstrap/dist/css/bootstrap.min.css';

InertiaProgress.init(); // Optional: to initialize the progress bar

createInertiaApp({
    resolve: name => import(`./Pages/${name}.vue`), // Use `import` instead of `require`
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
});
