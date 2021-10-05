<template lang="pug">
div(
    class="video-player"
    style="height: 100%; width: 100%"
)
    div(
        class="video-container relative"
        style="height: 100%; width: 100%; background-color: inherit"
        v-if="!disabled"
    )
        //- iframe(
        //-     frameborder="0"
        //-     allow="fullscreen; picture-in-picture"
        //-     allowfullscreen
        //-     style="width: 100%; height:100%; background-color: black"
        //-     v-if="!!video.link"
        //-     :src="video.link"
        //- )
        youtube(
            :video-id="video.link"
            ref="youtube"
            width="100%"
            height="100%"
            v-if="video.link"
            :player-vars="autoplay ? { autoplay: 1 } : {}"
        )
        div(
            v-else
            class="d-flex align-center justify-center"
            style="width: 100%; height: 100%"
        )
            div Wideo tymczasowo niedostępne
        div(
            class="yt-mask top"
            v-if="!openable"
        )
        div(
            class="yt-mask bottom"
            v-if="!openable"
        )

    div(
        v-if="disabled"
        class="video-container d-flex align-center justify-center"
        style="width: 100%; height: 100%"
    )
        div Wideo jest odtwarzane w innym oknie
</template>

<script>
export default {
    data: () => ({
        disabled: false
    }),
    props: {
        video: {
            required: true,
            type: Object
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        openable: Boolean
    },

    computed: {
        player() {
            return this.$refs.youtube.player
        }
    },

    methods: {
        // playVideo() {
        //     this.disabled = false
        // },
        // stopVideo() {
        //     this.disabled = true
        // },

        async playVideo() {
            await this.player.playVideo()
        },
        async stopVideo() {
            await this.player.stopVideo()
        }
    }
}
</script>

<style lang="sass" scoped>
.video-player
    .video-container
        background-color: white
        overflow: hidden

    .placeholder
        cursor: pointer
        .placeholder-image
            width: 100%
            height: 100%
            transition: .2s all ease-in-out
            object-position: top center

        .play-button
            transition: .2s all ease-in-out
            width: 30px
            position: absolute
            top: calc(50% - 15px)
            left: calc(50% - 15px)
        .overlay
            transition: .2s all ease-in-out
            position: absolute
            width: 100%
            height: 100%
            top: 0
            left: 0
            background-color: rgba(0, 0, 0, 0.2)
        &:hover
            .placeholder-image
                transform: scale(1.05)
            .overlay
                background-color: rgba(0, 0, 0, 0.3)
            .play-button
                transform: scale(1.05)

.yt-mask
    // background-color: rgba(11, 100, 233, 0.2)
    // border: 1px solid green
    color: white
    position: absolute
    z-index: 1
    &.bottom
        right: 0
        bottom: 0
        height: 40px
        width: 120px
        @media(max-width: 539px)
            height: 36px
    &.top
        left: 0
        top: 0
        width: calc(100% - 400px)
        height: 60px
</style>