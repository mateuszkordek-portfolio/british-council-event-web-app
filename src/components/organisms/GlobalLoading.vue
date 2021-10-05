<template lang="pug">
div(class="global-loading ")
    div(
        class="d-flex flex-column align-center justify-center"
        style="width: 100%; height: 100%"
    )
        img(
            :src="darkLogoImage"
            height="80"
            class="mb-4"
        )
        h2(class="text-center mt-6")
            div Dni Otwarte
            div 2 - 6 września 2021
        v-progress-circular(
            indeterminate
            color="primary"
            class="mt-4"
        )
</template>

<style lang="sass" scoped>
.global-loading
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    z-index: 100
    background-color: white
</style>