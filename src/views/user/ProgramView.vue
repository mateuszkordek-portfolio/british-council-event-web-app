<template lang="pug">
div(class="program-view")
    v-container(class="relative")
        CustomSpacer
        MainHeader(
            bar
        ) Program wydarzenia
        //- BigCard(class="text-card")
        //-     p Mając na uwadze, że wdrożenie nowych, lepszych rozwiązań umożliwia w kształtowaniu istniejących kryteriów spełnia ważne zadanie w większym stopniu tworzenie nowych propozycji.
        //-     CustomButton(
        //-         to="sekcje"
        //-     ) Przejdź do zakładki Sekcje

        //- div {{ $store.getters['eventData/getProgramSortedByDay'].map((a) => a.date) }}
        CustomSpacer(
            v-if="!phablet"
        )
        BigCard(class="d-flex flex-column align-center justify-center relative")
            Sticker(
                fileName="compass"
                size="80"
                style="transform: rotate(-25deg); top: -30px; right: 0px; z-index: 1"
                v-if="!phablet"
            )

            //- desktop
            v-tabs(
                v-model="selectedDay"
                class="d-flex align-center justify-center mb-12"
                v-if="!phablet"
            )
                v-tab(
                    v-for="(day, index) in $store.getters['eventData/getProgramSortedByDay']"
                    :key="index"
                    active-class="active-class"
                    class="pb-5 pt-5 px-4 mx-3"
                    :style="'color:' + labels[index].color"
                )
                    div(
                        style="text-transform: none; font-weight: 600"
                        class="tab-text"
                    )
                        h4 Wrzesień
                        h1(
                            style="font-size: 35px"
                            class="my-3"
                        ) {{ labels[index].monthDay }}
                        h4 {{ labels[index].weekday }}

            //- phablet
            v-tabs(
                vertical
                v-model="selectedDay"
                class="d-flex align-center justify-center mb-8"
                v-else
                style="width: 100%"
            )
                v-tab(
                    v-for="(day, index) in $store.getters['eventData/getProgramSortedByDay']"
                    :key="index"
                    active-class="active-class"
                    :style="'color:' + labels[index].color"
                    style="max-width: 100%"
                    class="d-flex justify-start"
                )
                    //- class="pb-5 pt-5 px-4 mx-3"

                    h1(class="text-left")
                        span {{ labels[index].monthDay }}
                        span(
                            style="color: #e0e0e0"
                            class="mx-2"
                        ) |
                        span(class="primary--text") {{ labels[index].weekday }}

            v-tabs-items(
                v-model="selectedDay"
            )
                v-tab-item(
                    v-for="(day, index) in $store.getters['eventData/getProgramSortedByDay']"
                    :key="index"
                    style="max-width: 800px"
                )
                    div(
                        v-for="(live, index2) in day.webinars"
                        :key="index2"
                        class="mb-8 radius"
                        :class="phone ? 'pa-3' : phablet ? 'pa-6' : 'pa-12'"
                        style="background-color: #f7f7f8"
                    )
                        ProgramElement(
                            :live="live"
                            :color="labels[index].color"
                        )
                        //- button
                        v-row(class="mt-8")
                            v-col(
                                :cols="phablet ? 12 : 6"
                            )
                                CustomButton(
                                    style="max-width: 350px; width: 100%"
                                    to="/live"
                                    :disabled="!live.active"
                                )
                                    span(
                                        v-if="live.active"
                                    ) Przejdź do transmisji
                                    span(
                                        v-else
                                    ) Zapraszamy w godzinach transmisji
                            v-col(
                                :cols="phablet ? 12 : 6"
                            )
                                CustomButton(
                                    style="max-width: 350px; width: 100%"
                                    color="primary"
                                    v-if="live.workshops"
                                    @click="signUpToWorkshops"
                                ) Zapisz się!

        CustomSpacer
</template>
<script>
import ProgramElement from "@/components/molecules/ProgramElement.vue"
export default {
    components: {
        ProgramElement
    },
    data() {
        return {
            labels: [
                {
                    monthDay: "02",
                    weekday: "Czw",
                    color: "#ff00c8"
                },
                {
                    monthDay: "03",
                    weekday: "Pt",
                    color: "#ea0034"
                },
                {
                    monthDay: "04",
                    weekday: "So",
                    color: "#b25eff"
                },
                {
                    monthDay: "05",
                    weekday: "Nd",
                    color: "#035c67"
                },
                {
                    monthDay: "06",
                    weekday: "Pon",
                    color: "#ff8200"
                }
            ],
            selectedDay: null
        }
    }
}
</script>

<style lang="sass" >
.program-view
    .v-tabs-bar
        height: auto
        margin-bottom: 10px
    .tab-text
        color: initial !important
    .active-class
        .tab-text
            color: inherit !important
</style>