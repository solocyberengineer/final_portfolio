import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { StartInstance } from './views/3DScene/world.js';

// const instance = new sceneInstance();
createApp(App).use(router).mount('#app')

StartInstance();