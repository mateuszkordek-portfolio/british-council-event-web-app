<template lang="pug">
v-app(
    style="position: relative"
    :class="!cssLoaded ? 'loading-lock' : ''"
)
    div(
        v-if="cssLoaded"
        style="overflow-x: hidden"
    )
        router-view
        ModalController
    //- Plug
    GlobalLoading(
        v-show="!cssLoaded"
    )

    PrivacyBanner
</template>

<script>
import ModalController from "@/components/organisms/modal-controller/ModalController"
import GlobalLoading from "@/components/organisms/GlobalLoading"
import authMethods from "@/plugins/authMethods"
import { mapMutations } from "vuex"
import Plug from "@/components/organisms/Plug"
import PrivacyBanner from "@/components/organisms/PrivacyBanner"

export default {
    name: "App",

    mixins: [authMethods],

    components: {
        ModalController,
        GlobalLoading,
        Plug,
        PrivacyBanner
    },

    data: () => ({
        cssLoaded: false
    }),

    mounted() {
        this.$nextTick(() => {
            setTimeout(() => (this.cssLoaded = true), 500)
        })
        this.removeWidowsAndOrphans()
    },

    created() {
        this.CHECK_LIVE_TRANSMISSIONS()
        setInterval(() => {
            this.CHECK_LIVE_TRANSMISSIONS()
        }, 15000)
    },

    methods: {
        ...mapMutations("eventData", ["CHECK_LIVE_TRANSMISSIONS"])
    },

    watch: {
        $route() {
            setTimeout(() => this.$vuetify.goTo(0), 300)
        }
    }
}
</script>
<style>
@import "assets/fonts.css";
</style>

<style lang="sass">
@import 'assets/global'

.fade-enter-active, .fade-leave-active
    transition-duration: 0.2s
    transition-property: opacity
    transition-timing-function: ease

.fade-enter, .fade-leave-active
    opacity: 0

.loading-lock
    max-height: 100vh
    overflow-y: hidden
</style>