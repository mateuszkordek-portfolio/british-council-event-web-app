<template lang="pug">
img(
    :src="path"
    style="position: absolute; object-fit: contain"
    :style="style"
)
</template>

<script>
export default {
    props: {
        fileName: String,
        size: {
            default: "100"
        }
    },

    computed: {
        path() {
            return require(`@/assets/stickers/${this.fileName}.png`)
        },
        style() {
            return `
                width: ${this.size}px;
                height: ${this.size}px
            `
        }
    }
}
</script>