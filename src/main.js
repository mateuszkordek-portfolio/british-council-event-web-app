import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

import VueGtag from 'vue-gtag'

import SocketIO from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

import '@/plugins/breakpoints'
import '@/plugins/bus'
import '@/plugins/mixins'
import '@/plugins/components'
import '@/plugins/youtube'

Vue.config.productionTip = false

// const socketUrl = process.env.VUE_APP_WS_SERVER;

// Vue.use(
//     new VueSocketIO({
//         debug: false,
//         connection: SocketIO(socketUrl, { upgrade: false, transports: ['websocket'] })
//     })
// )

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
