<template lang="pug">
div(class="footer-section white--text")
    CustomSpacer

    v-container
        //- logo
        div
            img(
                :src="logoImage"
                width="130"
                class="mb-2 logo-link"
            )

            v-divider(
                class="white mt-5 mb-8"
                style="width: 100%"
            )

        div(
            class="d-flex justify-space-between"
            :class="phablet ? 'flex-column pb-5' : 'pb-12'"
        )
            div(
                :class="phablet ? 'mb-12' : ''"
            )
                h4(class="mb-3") Organizatorem wydarzenia jest British Council Polska
                div(class="mb-1")
                    a(
                        href="https://www.britishcouncil.pl"
                        target="_blank"
                        class="white--text"
                    ) www.britishcouncil.pl

                div
                    a(
                        href="https://dniotwartezangielskim.pl"
                        target="_blank"
                        class="white--text"
                    ) www.dniotwartezangielskim.pl
            div
                h4
                    span Masz pytania?
                    a(
                        href="mailto:PL_comms@britishcouncil.pl?subject=Dni%20Otwarte"
                        target="_blank"
                        class="white--text ml-1"
                    ) Skontaktuj się z nami

        div(
            class="d-flex justify-space-between"
            :class="phablet ? 'flex-column pt-2' : 'pt-12'"
        )
            div(
                class="small"
                :class="phablet ? 'order-1 mt-12 pt-4' : ''"
            )
                div &copy; 2021 British Council
                div British Council jest międzynarodową organizacją reprezentującą Zjednoczone Królestwo Wielkiej Brytanii i Irlandii Północnej.
                div Fundacja British Council jest jednostką zależną British Council UK.

            div(class="d-flex")
                //- facebook
                a(
                    :href="getSocialMedia.facebook"
                    target="_blank"
                    class="social-media-link no-underline d-flex align-center mr-3"
                )
                    img(
                        src="@/assets/icons/fb.png"
                        width="20"
                        class="logo-link"
                    )
                //- instagram
                a(
                    :href="getSocialMedia.instagram"
                    target="_blank"
                    class="social-media-link no-underline d-flex align-center mr-3"
                )
                    img(
                        src="@/assets/icons/ig.png"
                        width="20"
                        class="logo-link"
                    )
                //- youtube
                a(
                    :href="getSocialMedia.youtube"
                    target="_blank"
                    class="social-media-link no-underline d-flex align-center"
                )
                    img(
                        src="@/assets/icons/yt.png"
                        width="20"
                        class="logo-link"
                    )
    CustomSpacer(
        :small="phone"
    )
        //- v-if="!phone"
</template>

<script>
import { mapGetters } from "vuex"

export default {
    computed: {
        ...mapGetters("otherData", [
            "getSocialMedia",
            "getRegulations",
            "getContact"
        ])
    }
}
</script>

<style lang="sass" scoped>
.footer-section
    background-color: var(--v-primary-base)
    .social-media-link
        background-color: rgba(255, 255, 255, 0.1)
        width: 40px
        height: 40px
        display: flex
        justify-content: center
        align-items: center
        border-radius: 50%
</style>