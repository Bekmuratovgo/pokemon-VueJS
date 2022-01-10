import Vue from 'vue'
import Router from 'vue-router'
import vMain from '../components/Main/p-Main'
import vCardDetails from '../components/CardDetails/p-CardDetails'
import pVerification from '../components/Auth/p-Auth'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/main',
            name: 'main',
            component: vMain,
            props: true
        },
        {
            path: '/details',
            name: 'details',
            component: vCardDetails,
            props: true
        },
        {
            path: '/',
            name: 'ver',
            component: pVerification,
            props: true
        },
    ]
})

export default router