<template lang="pug">
div
    //- icons
    div(
        class="d-flex mb-7 flex-wrap"
        :class="phone ? 'flex-column align-start' : 'align-center'"
    )
        div(
            class="d-flex mb-3"
            :class="phone ? 'align-start' : 'mr-8 align-center'"
        )
            v-icon(
                size="20"
                :color="color"
                class="mr-1"
            ) mdi-clock-outline
            span {{ getPLTimeFromTimestamp(live.startDisplay) }} - {{ getPLTimeFromTimestamp(live.endDisplay) }}

        div(
            class="d-flex mb-3"
            :class="phone ? 'align-start' : 'mr-8 align-center'"
            v-if="!!live.workshops"
        )
            v-icon(
                size="20"
                :color="color"
                class="mr-2"
                :style="[phone ? { 'margin-top': '2px' } : {}]"
            ) mdi-account-group
            span Warsztaty

        div(
            class="d-flex mb-3"
            :class="phone ? 'align-start' : 'mr-8 align-center'"
            v-if="!live.workshops"
        )
            v-icon(
                size="20"
                :color="color"
                class="mr-1"
                :style="[phone ? { 'margin-top': '2px' } : {}]"
            ) mdi-presentation

            span Prezentacja

        div(
            class="d-flex mb-3"
            :class="phone ? 'align-start' : 'align-center'"
            v-if="!!live.workshops"
        )
            v-icon(
                size="20"
                :color="color"
                class="mr-1"
                :style="[phone ? { 'margin-top': '2px' } : {}]"
            ) mdi-account-circle
            span Limit uczestników – obowiązują dodatkowe zapisy

    //- recipient
    h5(
        v-html="live.recipient"
        :style="'color:' + color"
        class="mb-2"
    )

    //- title
    h3(class="mb-7")
        div(
            v-html="live.title"
        )

    //- description
    div(
        v-html="live.desc1"
        class="mb-6"
    )

    //- additional description
    div(
        v-html="live.desc2"
        style="font-size: 14px"
    )
</template>

<script>
export default {
    props: {
        live: {
            type: Object,
            required: true
        },
        color: String
    }
}
</script>
