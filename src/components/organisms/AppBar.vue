<template lang="pug">
div(
    class="app-bar d-flex justify-space-between"
    style="width: 100%"
)
    div
        div(
            @click="$emit('openDrawer')"
            class="d-flex align-center"
            v-if="phablet"
        )
            v-app-bar-nav-icon(
                class="mr-0"
                color="primary"
            )
            span(
                style="margin-left: -5px; margin-bottom: 2px; font-size: 17px; font-weight: 600"
            ) Menu
    //- div {{ getUser }}

    //- ikona aktywnego live'a na phabletcie - nie wyswietla sie adminowi
    router-link(
        to="/live"
        v-if="!!getUser && getUser.accountType != 'ADMIN' && getUser.accountType != 'SUPERADMIN' && $store.getters['eventData/getActiveLiveTransmissions'].length"
        class="d-flex align-center no-underline"
    )
        div(
            class="small"
            style="font-weight: 600"
        )
            div Teraz
            div Live!
        img(
            src="@/assets/stickers/camera.png"
            width="40px"
            class="shk"
            :class="phablet ? 'ml-1' : 'ml-2'"
        )

    //- info dla admina ze jest zalogowany
    div(
        v-if="!!getUser && (getUser.accountType == 'ADMIN' || getUser.accountType == 'SUPERADMIN')"
        class="d-flex align-end flex-column"
    )
        h5 Zalogowano jako administrator
        div(class="d-flex align-center")
            div {{ getUser.username }}
            v-icon(
                size="20"
                color="primary"
                class="ml-1"
                @click="logoutAdmin"
                style="cursor: pointer"
            ) mdi-logout-variant
</template>

<script>
import authMethods from "@/plugins/authMethods"
import { mapGetters } from "vuex"
export default {
    name: "AppBar",

    mixins: [authMethods],

    computed: {
        ...mapGetters("authentication", ["getUser"])
    }
    // watch: {
    //     getUser: {
    //         immediate: true,
    //         handler(val) {
    //             console.log(val.email)
    //         }
    //     }
    // }
}
</script>

<style lang="sass" scoped>
.app-bar
    .avatar-text
        .main
            font-size: 14px
            padding-bottom: 3px
            text-transform: none
        .sub
            font-size: 11px
            text-transform: none
</style>