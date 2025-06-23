import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Masonry from 'vue-next-masonry'

const app = createApp(App)
app.use(Masonry)
app.mount('#app')
