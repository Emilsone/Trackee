import Vue from "vue";
import VueRouter from "vue-router";
// import store from "@/store";
import Dashboard from "../views/Dashboard.vue";
import Home from "../views/Home.vue";
// import Register from "../views/Register";
// import Login from "../views/Login";
import Profile from "../views/Profile";


Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
},
// {
//     path: "/register",
//     name: "Register",
//     component: Register,
//     meta: { guest: true },
// },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { guest: true },
    },
// {
//     path: "/login",
//     name: "Login",
//     component: Login,
//     meta: { guest: true },
// },
{
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { auth: true },
},
];

// router.beforeEach((to, from, next) => {
//     if (to.meta.auth && !store.state.currentUser) {
//         next({
//             path: "/login"
//         })
//     } else {
//         next()
//     }
// })
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});


export default router;