<template lang="pug">
CustomBox(
    class="relative d-flex flex-column justify-space-between py-12"
    @click="handleClick"
    style="border: 1px solid"
    :style="[live.workshops ? { 'border-color': 'var(--v-secondary-base)' } : { 'border-color': 'var(--v-custom-purple-base)' }]"
)
    //- live label
    div(
        v-if="active"
        class="d-flex align-center"
        style="position: absolute; right: 20px; top: 15px"
        :class="phone ? 'ml-3' : 'ml-7'"
    )
        img(
            src="@/assets/emoji/live.gif"
            height="14"
            class="mr-2"
        )
        h4(class="font-weight-medium") Teraz na żywo!

    ProgramElement(
        :live="live"
        :color="live.workshops ? 'var(--v-secondary-base)' : 'var(--v-custom-purple-base)'"
    )
        //- color="var(--v-secondary-base)"

    //- button
    CustomButton(
        style="max-width: 350px; width: 100%"
        class="mt-8"
        :disabled="!active"
    )
        span(
            v-if="active"
        ) Przejdź do transmisji
        span(
            v-else
        ) Zapraszamy w godzinach transmisji

    v-dialog(
        v-model="workshopsModal"
        max-width="300px"
        class="radius"
    )
        BigCard(class="text-center")
            img(
                src="@/assets/stickers/lets-go.png"
                width="110px"
            )
            h2 Opuszczasz platformę
            p(class="mt-3")
                span To spotkanie odbywa się na platformie Zoom. Przygotuj kod logowania, który wysłaliśmy Ci w mailu po rejestracji na warsztaty i przejdź do spotkania. Możesz zapisać się na warsztaty w zakładce
                router-link(
                    to="program"
                    class="ml-1"
                    style="font-weight: 600"
                ) Program
                span .
            CustomButton(
                @click="openWorkshopsSite"
                style="width: 100%"
                class="mt-3"
            ) Przejdź do warsztatów
</template>

<script>
import ProgramElement from "@/components/molecules/ProgramElement.vue"
export default {
    components: {
        ProgramElement
    },

    data: () => ({
        workshopsModal: false
    }),

    props: {
        live: {
            type: Object,
            required: true
        },
        active: {
            type: Boolean
        }
    },

    methods: {
        handleClick() {
            if (this.active) {
                if (!!this.live.workshops) {
                    this.workshopsModal = true
                } else {
                    this.$router.push({
                        name: "live-slug",
                        params: { slug: this.live.slug }
                    })
                }
            }
        },
        openWorkshopsSite() {
            window.open(this.live.link, "_blank")
            this.workshopsModal = false
        }
    }
}
</script>