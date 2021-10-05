<template lang="pug">
div(
    style="width: 100vw; height: 100%; pointer-events: none; position: fixed; z-index: 9"
)
    div(
        style="pointer-events: all; position: absolute; bottom: 0px; right: 0px"
        :class="phone ? '' : 'pr-3 pb-3'"
    )
        //- :style="{padding: bpPhone ? 0 : '20px'}"
        transition(
            name="fade-up"
        )
            v-card(
                v-if="show"
                class="banner-card pa-5"
                :tile="phone"
            )
                h4(class="mb-3") Strona wykorzystuje pliki cookies i localStorage

                p
                    span Korzystamy z plików cookies w celach monitorowania ruchu witryny. Dalsze korzystanie z serwisu bez zmiany ustawień przeglądarki oznacza akceptację plików cookies. Więcej informacji o zamieszczanych plikach cookies oraz o możliwości zmiany ustawień przeglądarki oraz polityce przetwarzania danych osobowych znajdą Państwo w naszej

                    a(
                        :href="getRegulations.cookies"
                        @click="(event) => event.stopPropagation()"
                        target="_blank"
                        class="ml-1"
                    ) polityce obsługi plików cookies
                    span(class="mx-1") oraz
                    a(
                        :href="getRegulations.terms"
                        @click="(event) => event.stopPropagation()"
                        target="_blank"
                    ) polityce ochrony danych osobowych
                    span .

                v-btn.font-weight-bold.px-7(
                    color="primary"
                    depressed
                    @click="accept_cookies()"
                    :width="phone ? '100%' : ''"
                )
                    span(
                        style="text-transform: none"
                    ) Akceptuję
</template>

<script>
import { mapGetters } from "vuex"
export default {
    data: () => ({
        show: false
    }),

    mounted() {
        this.check_cookies()
    },

    computed: {
        ...mapGetters("otherData", ["getRegulations"])
    },

    methods: {
        accept_cookies() {
            localStorage.setItem("cookies", "true")
            this.show = false
        },

        async check_cookies() {
            if (!localStorage.getItem("cookies")) {
                // await this.wait(2000);
                await setTimeout(() => (this.show = true), 2000)
            }
        }
    }
}
</script>
<style lang="sass">
.banner-card
    max-width: 450px

</style>

<style>
.fade-up-active {
    transition: all 0.4s ease-in-out !important;
}
.fade-up-enter {
    transform: translateY(100px) !important;
    opacity: 0;
}
.fade-up-enter-to {
    transform: translateY(0px) !important;
    opacity: 1;
}
.fade-up-leave-active {
    transition: all 0.4s ease-in-out !important;
}
.fade-up-leave {
    transform: translateY(0px) !important;
    opacity: 1;
}
.fade-up-leave-to {
    transform: translateY(100px) !important;
    opacity: 0;
}
</style>