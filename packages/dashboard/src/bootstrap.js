import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue'

const dashboardMount = (ele) => {
    const app = createApp(Dashboard)
    app.mount(ele)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root')
    if (devRoot) dashboardMount(devRoot)
}

export { dashboardMount }
