import { createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue"
import Main from "../views/Main.vue"
import Room from "../views/Room.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue";
import Contact from "../views/Contact.vue";
import Profile from "../views/Profile.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/main',
        name: 'Main',
        component: Main
    },
    {
        path: '/room/:roomRef',
        name: 'Room',
        component: Room,
        props: true
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})



router.beforeEach(async (to) => {
    let isAuthenticated = (localStorage.getItem('userId') !== null)
    if ( !isAuthenticated && to.name !== 'Login' && to.name !== 'Register' && to.name !== 'Contact' ) {
        return { name: 'Login' }
    }else if(isAuthenticated && (to.name === 'Login' || to.name === 'Register')){
        return { name: 'Main' }
    }
})

export default router
