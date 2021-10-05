<template lang="pug">
div(class="navigation-drawer relative")
    //- img(
    //-     style="position: absolute; top: 0; left: 0; pointer-events: none; width: 100%; height: 100%; object-fit: cover"
    //-     src="@/assets/images/bg.png"
    //- )
    div(class="d-flex align-center justify-center flex-column pa-10 logo-margin")
        router-link(
            to="/"
            class="logo-link no-underline text-center "
        )
            img(
                :src="darkLogoImage"
                width="90%"
            )
        h3(class="primary--text text-center mt-5 mb-0")
            div Dni Otwarte
            div 2 - 6 września 2021

    v-list(class="mr-3 mb-1")
        //- style="margin-top: -40px"
        v-list-item(
            v-for="(btn, index) in navButtons"
            :key="index"
            :to="btn.link"
            active-class="lighten-4 accent--text font-weight-bold custom-active-class"
            class="my-3 d-flex align-center"
            dense
        )
            //- zwykle
            div(
                v-if="btn.type != 'live-btn' && btn.type != 'workshops-btn'"
                class="d-flex align-center"
            )
                img(
                    :src="btn.icon"
                    height="40"
                    class="ml-2 mr-3"
                )

            //- prezentacje
            div(
                v-if="btn.type == 'live-btn'"
                class="d-flex align-center"
            )
                img(
                    :src="btn.iconLive"
                    height="40"
                    v-if="!!getActiveLiveTransmissions.length"
                    class="ml-2 mr-3 shk"
                )
                img(
                    :src="btn.icon"
                    height="40"
                    v-if="!getActiveLiveTransmissions.length"
                    class="ml-2 mr-3"
                )

            //- tekst
            h4(class="ml-1 mb-0") {{ btn.name }}
</template>

<script>
import { mapGetters } from "vuex"
export default {
    data: () => ({
        navButtons: [
            {
                link: "/zacznij-tutaj",
                name: "Zacznij tutaj",
                icon: require("@/assets/stickers/smile.png")
            },
            {
                link: "/live",
                name: "Na żywo",
                icon: require("@/assets/stickers/play.png"),
                iconLive: require("@/assets/stickers/camera.png"),
                type: "live-btn"
            },
            {
                link: "/nagrania",
                name: "Nagrania",
                icon: require("@/assets/stickers/recordings.png")
            },
            {
                link: "/program",
                name: "Program",
                icon: require("@/assets/stickers/star.png")
            },
            {
                link: "/kalendarz",
                name: "Kalendarz",
                icon: require("@/assets/stickers/calendar.png")
            },
            {
                link: "/czat",
                name: "Czat",
                icon: require("@/assets/stickers/dialog-2.png")
            },

            {
                link: "/zadaj-pytanie",
                name: "Zadaj pytanie",
                icon: require("@/assets/stickers/plane.png")
            },
            {
                link: "/konkurs",
                name: "Konkurs",
                icon: require("@/assets/stickers/competition.png")
            },
            {
                link: "/pomoc",
                name: "Pomoc",
                icon: require("@/assets/stickers/puzzle.png")
            }
        ]
    }),

    computed: {
        ...mapGetters("eventData", ["getActiveLiveTransmissions"])
    }
}
</script>

<style lang="sass" scoped>
.navigation-drawer
    height: 100%
    // padding-top: 35px
    @media(min-height: 700px)
        padding-top: 13px

    @media(min-height: 800px)
        padding-top: 45px

    @media(min-height: 900px)
        padding-top: 65px

    @media(max-width: 767.98px)
        padding-top: 40px

    .v-list-item--link
        &::before
            border-top-right-radius: 10px
            border-bottom-right-radius: 10px
    .custom-active-class
        // border-left: 2px solid red
        border-top-right-radius: 10px
        border-bottom-right-radius: 10px
        overflow: hidden
        position: relative
        &::after
            position: absolute
            height: 100%
            width: 5px
            display: block
            content: ''
            background-color: var(--v-accent-base)
            left: 0
            top: 0

    .logo-margin
        margin-bottom: 0px
        @media(min-height: 700px)
            margin-bottom: 0px
        @media(min-height: 800px)
            margin-bottom: 30px
        @media(min-height: 900px)
            margin-bottom: 100px






</style>
