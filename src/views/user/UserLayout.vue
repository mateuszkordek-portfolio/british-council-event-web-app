<template lang="pug">
.user-layout
    v-navigation-drawer(
        app
        v-model="drawerOpened"
        :permanent="!phablet"
        :width="phablet ? 320 : 280"
        style="height: 100%; overflow-y: auto; z-index: 15"
    )
        NavigationDrawer

    v-app-bar(
        app
        :class="{ scrolled: scrollTop }"
        height="64px"
        style="background-color: white; z-index: 10"
    )
        AppBar(
            @openDrawer="drawerOpened = true"
        )

    v-main(
        app
        class="relative custom-grey"
        style="min-height: 100vh"
    )
        //- style="min-height: 100vh; overflow: hidden"
        transition(
            name="fade"
            mode="out-in"
        )
            router-view(class="z-index-1")
</template>

<script>
import NavigationDrawer from "@/components/organisms/NavigationDrawer"
import AppBar from "@/components/organisms/AppBar"

export default {
    components: {
        NavigationDrawer,
        AppBar
    },

    data: () => ({
        drawerOpened: false,
        scrollTop: null
    }),

    methods: {
        updateScroll() {
            this.scrollTop = window.scrollY
        }
    },

    beforeMount() {
        this.scrollTop = window.scrollY
        window.addEventListener("scroll", this.updateScroll)
    },

    mounted() {
        this.removeWidowsAndOrphans()
    }
}
</script>

<style lang="sass">
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined)
    box-shadow: none !important
    &.scrolled
        box-shadow: 0px 5px 45px rgba(184, 184, 184, 0.22) !important

    @media(max-width: 1400px)
        padding-left: initial
        padding-right: initial

</style>
