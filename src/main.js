import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { StartInstance } from './views/3DScene/world.js';

StartInstance();

createApp(App).use(router).mount('#app')
