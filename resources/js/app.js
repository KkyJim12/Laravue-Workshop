/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");
import VueRouter from "vue-router";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.use(VueRouter);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component(
    "register-component",
    require("./components/ManualRegister/Register.vue").default
);

Vue.component(
    "navbar-component",
    require("./components/Parts/Navbar.vue").default
);

Vue.component("slot-example", require("./components/Slot/Slot1.vue").default);

Vue.component(
    "props-example",
    require("./components/Props/Props1.vue").default
);

const routes = [
    {
        path: "/",
        component: require("./components/Layouts/Master.vue").default,
        children: [
            {
                path: "/",
                component: require("./components/Homepage.vue").default
            },
            {
                path: "/show",
                component: require("./components/Show/Show.vue").default
            },
            {
                path: "/show/info/:id",
                component: require("./components/Show/Info.vue").default
            },
            {
                path: "/slot",
                component: require("./components/Slot/Slot2.vue").default
            },
            {
                path: "/props",
                component: require("./components/Props/Props2.vue").default
            },
            {
                path: "/watcher",
                component: require("./components/Watcher/Watcher.vue").default
            },
            {
                path: "/computed",
                component: require("./components/Computed/Computed.vue").default
            },
            {
                path: "/vuex",
                component: require("./components/Vuex/Vuex.vue").default
            },
            {
                path: "/vuex2",
                component: require("./components/Vuex/Vuex2.vue").default
            },
            {
                path: "/register",
                component: require("./components/ManualRegister/Register.vue")
                    .default,
                beforeEnter: (to, from, next) => {
                    if (localStorage.getItem("email")) {
                        window.location.href = "/";
                    } else {
                        next();
                    }
                }
            },
            {
                path: "/login",
                component: require("./components/ManualLogin/Login.vue")
                    .default,
                meta: { auth: true }
            },
            {
                path: "/crud",
                component: require("./components/CRUD/CRUD.vue").default,
                meta: { auth: false }
            },
            {
                path: "/create",
                component: require("./components/CRUD/Create.vue").default,
                meta: { auth: false }
            },
            {
                path: "/edit/:id",
                component: require("./components/CRUD/Edit.vue").default,
                meta: { auth: false }
            }
        ]
    }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

const store = new Vuex.Store({
    state: {
        tel: null
    },
    mutations: {
        Store(state, tel) {
            state.tel = tel;
        }
    },
    getters: {
        tel: state => state.tel
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (localStorage.getItem("email") !== null) {
            window.location.href = "/";
        } else {
            next();
        }
    } else {
        next();
    }
});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    router,
    store
});
