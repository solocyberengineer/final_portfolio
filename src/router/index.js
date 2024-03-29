import { createRouter, createWebHistory } from 'vue-router';

// Importing pages
import HomePage from '../views/HomeView.vue';
import AboutPage from '../views/AboutView.vue';
import ContactPage from '../views/ContactView.vue';
import SkillsPage from '../views/SkillsView.vue';
import ProjectsPage from '../views/ProjectsView.vue';
import ReviewsPage from '../views/ReviewsView.vue';
import ResumePage from '../views/ResumeView.vue';

const routes = [
    createRoute('/', 'Home', HomePage),
    createRoute('/about', 'About', AboutPage),
    createRoute('/contact', 'Contact', ContactPage),
    createRoute('/skills', 'Skills', SkillsPage),
    createRoute('/projects', 'Projects', ProjectsPage),
    createRoute('/reviews', 'Reviews', ReviewsPage),
    createRoute('/resume', 'Resume', ResumePage)
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