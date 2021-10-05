<template lang="pug">
div(
    style="height: 100%"
)
    iframe(
        src="https://padlet.com/skillspace/183fbtoeotn2y2ig"
        frameborder="0"
        allow="camera;microphone;geolocation"
        style="width: 100%; height: 100%; display: block; padding: 0; margin: 0"
    )
    div(
        style="padding: 8px; text-align: right; margin: 0"
    )
        a(
            href="https://padlet.com?ref=embed"
            style="padding: 0; margin: 0; border: none; display: block; line-height: 1; height: 16px"
            target="_blank"
        )
            img(
                src="https://padlet.net/embeds/made_with_padlet.png"
                width="86"
                height="16"
                style="padding: 0; margin: 0; background: none; border: none; display: inline; box-shadow: none"
                alt="Made with Padlet"
            )
</template>

<script>
export default {
    mounted() {
        this.removeWidowsAndOrphans()
    }
}
</script>