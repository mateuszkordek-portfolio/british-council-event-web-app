<template lang="pug">
div(class="live-view relative")
    Sticker(
        fileName="drum"
        size="100"
        style="transform: rotate(-25deg); top: 80px; right: 20px"
        v-if="!phablet"
    )
    Sticker(
        fileName="star-3"
        size="70"
        style="transform: rotate(-25deg); top: 180px; right: 80px"
        v-if="!phablet"
    )
    CustomSpacer
    v-container
        MainHeader(
            bar
        ) Transmisje na żywo

        BigCard(class="text-card")
            p Zapraszamy do udziału w spotkaniach, które dla Was przygotowaliśmy! Poniżej wyświetlane są aktualnie aktywne wydarzenia.

            div
                span Pełną listę prezentacji i warsztatów znajdziesz w zakładce
                router-link(
                    to="program"
                    class="ml-1"
                    style="font-weight: 600"
                ) Program
                span .
        CustomSpacer

        XGrid(
            :cols="[1, 1, 1, 1]"
            class="relative"
        )
            LiveThumb(
                v-for="(lt, index) in getActiveLiveTransmissions"
                :key="index"
                :live="lt"
                :active="lt.active"
                class="z-index-1"
            )
        div(
            v-if="!getActiveLiveTransmissions || !getActiveLiveTransmissions.length"
            class="text-center"
            style="width: 100%; margin: 100px 0"
        )
            img(
                src="@/assets/stickers/gear.png"
                width="100px"
            )
            h3(class="text-center mt-6") Brak aktualnie prowadzonych transmisji.

    CustomSpacer
</template>

<script>
import LiveThumb from "@/components/molecules/LiveThumb"
import { mapGetters } from "vuex"
export default {
    components: {
        LiveThumb
    },

    computed: {
        ...mapGetters("eventData", [
            "getLiveTransmissions",
            "getActiveLiveTransmissions"
        ])
    },

    methods: {
        checkIfIsLive(lt) {
            return this.getActiveLiveTransmissions
                .map((a) => a._id)
                .includes(lt._id)
        }
    },

    mounted() {
        this.removeWidowsAndOrphans()
    }
}
</script>
