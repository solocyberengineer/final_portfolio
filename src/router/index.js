import { createRouter, createWebHistory } from 'vue-router';

// Importing pages
import HomePage from '../views/HomeView.vue';
import AboutPage from '../views/About.vue';
import ContactPage from '../views/Contact.vue';

const routes = [
    createRoute('/', 'Home', HomePage),
    createRoute('/about', 'About', AboutPage),
    createRoute('/contact', 'Contact', ContactPage)
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

// functions
function createRoute(path, name, component){
    return {
        path,
        name,
        component
    }
}

export default router