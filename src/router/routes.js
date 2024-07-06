import JobView from '../components/Job/JobView.vue'
import index from '../components/Index/IndexPage.vue'

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
        path: '/Paladin',
        component: JobView
    },
    {
        path: '/Warrior',
        component: JobView
    },
    {
        path: '/DarkKnight',
        component: JobView
    },
    {
        path: '/Gunbreaker',
        component: JobView
    },
    {
        path: '/Monk',
        component: JobView
    },
    {
        path: '/Dragoon',
        component: JobView
    },
    {
        path: '/Reaper',
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
        path: '/WhiteMage',
        component: JobView
    },
    {
        path: '/Astrologian',
        component: JobView
    },
    {
        path: '/Bard',
        component: JobView
    },
    {
        path: '/Machinist',
        component: JobView
    },
    {
        path: '/Dancer',
        component: JobView
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
        path: '/Summoner',
        component: JobView
    },
    {
        path: '/Pictomancer',
        component: JobView
    }
]

export default routes