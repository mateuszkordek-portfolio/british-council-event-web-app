<template lang="pug">
    div(
        class="main-header d-flex"
        :class="[{'justify-center': center}]"
    )
        div(
            :class="phone?'mb-8':laptop?'mb-8':'mb-12'"

        )
            div(
                class="bar secondary mb-1"
                v-if="bar"
            )
            div(
                class="label secondary--text mb-1 text-uppercase"
                v-if="label"
            ) {{label}}
            h1
                slot


</template>

<script>
export default {
    props: {
        bar: Boolean,
        center: Boolean,
        label: String,
    },
}
</script>

<style lang="sass" scoped>
.main-header
    .bar
        height: 4px
        width: 35px
        @media(max-width: 599.98px)
            width: 20px
    .label
        font-weight: 500
        font-size: 14px
</style>