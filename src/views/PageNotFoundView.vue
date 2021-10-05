<template lang="pug">
div(
    class="page-not-found-view d-flex align-center justify-center custom-grey"
    :class="phablet ? 'flex-column' : ''"
    style="overflow: hidden"
)
    div(
        :class="phablet ? 'order-1' : 'mr-12 pr-12'"
        class="d-flex flex-column align-center"
    )
        div(
            v-if="!phone"
        )
            h1(
                style="font-size: 165px; line-height: 170px"
                class="text-center"
            ) 404
            h3(class="mb-6") Wygląda na to, że nic tu nie ma...

        div(
            v-if="phone"
        )
            h1 404
            h4(class="mb-6") Wygląda na to, że nic tu nie ma...

        CustomButton(
            to="/"
            style="width: 100%"
        ) Wróć do strony głównej

    //- img(
    //-     src="@/assets/images/logo.png"
    //-     :height="phone ? 300 : 400"
    //- )
</template>
<style lang="sass" scoped>
.page-not-found-view
    width: 100vw
    height: 100vh
</style>