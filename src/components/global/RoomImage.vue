<template lang="pug">
    div(
        class="room-image"
        :class="phablet?'px-5 py-4':'px-8 py-6'"
        style="height: 100%; width: 100%"
    )
        //- :aspect-ratio="2/1"
        div(
            class="d-flex flex-column justify-space-between"
            style="width: 100%; height: 100%"
        )
            div
                div(
                    class="d-flex align-center mb-6"
                )
                    img(
                        src='@/assets/emoji/live.gif'
                        height="20"
                        class="mr-1"
                    )
                    div(
                        v-if="!!exhibitor"
                        class="exhibitor-name"
                    ) {{ exhibitor.name }}
                    div(
                        v-if="!exhibitor"
                    ) Teraz na żywo!
                div(
                    v-if="!!title"
                    class="room-title"
                ) {{ title}}


            div(
                style="font-weight: 500"
                class="mt-10"
            )
                slot
            //- div(
            //-     class="d-flex justify-space-between align-center"
            //- )
            //-     div(
            //-         class="d-flex align-center"
            //-     )
            //-         img(
            //-             :src="logoImage"
            //-             width="50px"
            //-         )
            //-         h4 Targi Pracy AGH
            //-     div(
            //-         style="font-weight: 500"
            //-     ) Zapraszamy!


</template>

<script>
export default {
    props: {
        title: String,
        exhibitor: Object,
    },
}
</script>

<style lang="sass" scoped>
.room-image
    .exhibitor-name
        font-size: 18px
        font-weight: 500
    .room-title
        font-size: 20px
        font-weight: 600
</style>