import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router'   
import '@fortawesome/fontawesome-free/css/all.min.css'
createApp(App)
  .use(router)                  
  .mount('#app')