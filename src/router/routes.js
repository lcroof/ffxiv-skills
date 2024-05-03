import JobView from '../components/JobView.vue'
import App from '../App.vue'

const routes = [
    {
        path: '/',
        component: App
    },
    {
        path: '/BlackMage',
        component: JobView
    },
    {
        path: '/RedMage',
        component: JobView
    }
]

export default routes