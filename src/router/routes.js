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
    }
]

export default routes