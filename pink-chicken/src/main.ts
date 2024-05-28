import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import {createPinia} from "pinia"
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';

loadFonts()

createApp(App)
    .use(vuetify)
    .use(PerfectScrollbarPlugin)
    .use(createPinia())
  .mount('#app')
