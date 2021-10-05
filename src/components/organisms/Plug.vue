<template lang="pug">
div(class="plug relative")
    //- v-container(
    //-     class="d-flex flex-column justify-space-between z-index-1"
    //-     style="height: 100%"
    //- )
    //-     div(class="d-flex align-center logo-container")
    //-         a(
    //-             href="https://kandydaci.agh.edu.pl/poznaj-agh/kola-naukowe-i-organizacje-studenckie/"
    //-             target="_blank"
    //-             style="height: 100%"
    //-             class="d-flex align-center logo-link"
    //-         )
    //-             img(
    //-                 :src="kolaLogoImage"
    //-                 height="70%"
    //-             )
    //-         div(class="custom-divider ml-12 mr-3")
    //-         a(
    //-             href="https://www.agh.edu.pl/"
    //-             target="_blank"
    //-             style="height: 100%"
    //-             class="d-flex align-center logo-link"
    //-         )
    //-             img(
    //-                 :src="aghLogoImage"
    //-                 height="100%"
    //-             )
    //-     div
    //-         h1(class="main-header")
    //-             div
    //-                 span(class="primary--text mr-2") 58.
    //-                 span Konferencja Studenckich
    //-             div Kół Naukowych Pionu
    //-             div Hutniczego AGH

    //-         h2(class="primary--text pb-7 secondary-header") 6 maja 2021

    //-         div(class="timer-container")
    //-             Timer

    //-         CustomButton(
    //-             @click="openLink(getRegulations.poster)"
    //-             class="mt-10"
    //-         )
    //-             span Pobierz program konferencji
    //-             v-icon(
    //-                 size="16"
    //-                 class="ml-2"
    //-             ) mdi-download

    //-     div(class="pseudo")
    //- img(
    //-     :src="logoImage"
    //-     :height="phablet ? '65%' : '75%'"
    //-     class="main-logo"
    //- )
</template>

<script>
import { mapGetters } from "vuex"
import Timer from "@/components/molecules/Timer"

export default {
    components: { Timer },
    computed: {
        ...mapGetters("otherData", ["getRegulations"])
    }
}
</script>

<style lang="sass" scoped>
@import "@/assets/variables.sass"
.plug
    width: 100vw
    min-height: 100vh
    overflow: hidden
    padding-top: 48px
    padding-bottom: 48px
    @media($low-screen)
        padding-top: 28px
        padding-bottom: 28px
    @media($phone)
        padding-top: 20px
        padding-bottom: 0

    .logo-container
        height: 110px
        @media($low-screen)
            height: 90px
        @media($phone)
            height: 80px
    .main-header
        font-size: 2.5em
        @media($low-screen)
            font-size: 2em
        @media($phone)
            font-size: 1.5em
    .secondary-header
        font-size: 2.2em
        font-weight: 600
        margin-top: 32px
        margin-bottom: 48px
        @media($low-screen)
            font-size: 1.8em
            margin-top: 22px
            margin-bottom: 25px
        @media($phone)
            font-size: 1.5em

    .custom-divider
        height: 60%
        width: 2px
        background-color: #E0E0E0
    .timer-container
        width: 450px
        @media($phone)
            width: 100%

    .main-logo
        position: absolute
        right: -5px
        bottom: -10px
        @media($phablet)
            right: -155px
        @media($phone)
            display: none


    .pseudo
        margin-top: 40px
        @media($low-screen)
            margin-top: 10px
</style>

