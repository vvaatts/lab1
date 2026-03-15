import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import posthog from 'posthog-js' 

// 1. Ініціалізація PostHog 
posthog.init('phc_cAity3uRcWX4CSMr5LgmmAm3UHQGelThexEf9CY43iF', {
    api_host: window.location.origin + '/ingest',
    person_profiles: 'identified_only'

})

// 2. Створення самого додатка Vue
const app = createApp(App)
app.mount('#app')