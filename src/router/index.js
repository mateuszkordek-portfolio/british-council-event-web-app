import Vue from 'vue'
import VueRouter from 'vue-router'

import store from "@/store/index";

Vue.use(VueRouter)

const routes = [
    {
        path: "/logowanie",
        name: "sign-in",
        component: () => import('../views/user/SignIn.vue'),
        meta: {
            auth: false
        },
    },
    {
        path: "/sesja-wygasla",
        name: "session-expired",
        component: () => import('../views/user/SessionExpired.vue'),
        meta: {
            auth: false
        },
    },
    {
        path: "/admin-login",
        name: "admin-login",
        component: () => import('../views/user/AdminLoginView.vue'),
        meta: {
            auth: false
        },
    },
    {
        path: "/",
        name: "root",
        component: () => import('../views/user/UserLayout.vue'),
        redirect: 'zacznij-tutaj',
        meta: {
            auth: true
        },
        children: [
            {
                path: "/zacznij-tutaj",
                name: "home",
                component: () => import('../views/user/HomeView.vue'),
                meta: {
                    auth: true
                },
            },
            {
                path: "/live",
                name: "live",
                component: () => import('../views/user/LiveView.vue'),
                meta: {
                    auth: true
                },
            },
            {
                path: "/live/:slug",
                name: "live-slug",
                component: () => import('../views/user/LiveSlugView.vue'),
                meta: {
                    auth: true
                },
            },
            {
                path: "/live-chat/:slug",
                name: "live-chat-slug",
                component: () => import('../views/user/FullscreenChatView.vue'),
                meta: {
                    auth: true
                },
            },
            {
                path: "/nagrania",
                name: "recordings",
                component: () => import('../views/user/RecordingsView.vue'),
                meta: {
                    auth: true
                },
            },
            {
                path: "/program",
                name: "program",
                component: () => import('../views/user/ProgramView.vue'),
                meta: {
                    auth: true
                },
            },
            {
                path: "/kalendarz",
                name: "calendar",
                component: () => import('../views/user/CalendarView.vue'),
                meta: {
                    auth: true
                },
            },
            {
                path: "/czat",
                name: "chat",
                component: () => import('../views/user/NetworkingView.vue'),
                meta: {
                    auth: true
                },
            },
            {
                path: "/konkurs",
                name: "competition",
                component: () => import('../views/user/CompetitionView.vue'),
                meta: {
                    auth: true
                },
            },
            {
                path: "/zadaj-pytanie",
                name: "ask",
                component: () => import('../views/user/AskView.vue'),
                meta: {
                    auth: true
                },
            },
            {
                path: "/pomoc",
                name: "help",
                component: () => import('../views/user/HelpView.vue'),
                meta: {
                    auth: true
                },
            },
        ]
    },
    {
        path: "/404",
        name: "404",
        component: () => import('../views/PageNotFoundView.vue'),
        meta: {
            auth: false,
        }
    },
]



const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (!to.name) {
        next({ name: "404" });
    } else {
        if (!to.meta.auth) {
            next()
        }

        else {
            if (store.state.authentication.user) {
                next()
            }
            else {

                // sprawdza czy user jest w local storage, jesli tak to to podejmuje probe zalogowania za pomoca tokena
                if (localStorage.getItem('loggedUser') != null) {
                    store.dispatch('authentication/loginUserAction')
                        .then(() => {
                            next();
                        })
                        .catch((error) => {
                            if (error.message == 401) {
                                store.dispatch('authentication/removeUserToken')
                                next({ name: "session-expired" });
                            } else {
                                next({ name: "sign-in" });
                            }
                        })
                }
                else {
                    next({ name: 'sign-in' })
                }
            }
        }
    }
});

export default router

