import { createApp } from 'vue'
import App from './App.vue'
import drag from "v-drag"

const app = createApp(App);

app.use(drag, {
    // global configurationç
});

app.mount('#app')