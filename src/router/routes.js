import JobView from '../components/JobView.vue'
import index from '../IndexPage.vue'

const routes = [
    {
        path: '/',
        component: index
    },
    {
        path: '/IndexPage',
        component: index
    },
    {
        path: '/BlackMage',
        component: JobView
    },
    {
        path: '/RedMage',
        component: JobView
    },
    {
        path: '/Ninja',
        component: JobView
    },
    {
        path: '/Viper',
        component: JobView
    },
    {
        path: '/Summoner',
        component: JobView
    },
    {
        path: '/Samurai',
        component: JobView
    },
    {
        path: '/Sage',
        component: JobView
    },
    {
        path: '/Scholar',
        component: JobView
    },
    {
        path: '/Pictomancer',
        component: JobView
    }
]

export default routes