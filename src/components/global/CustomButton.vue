<template lang="pug">
v-btn(
    class="custom-button"
    @click="$emit('click')"
    :to="to"
    depressed
    :disabled="disabled"
    :outlined="outlined"
    :class="!outlined ? 'primary' : ''"
    :small="small"
    :color="color"
    rounded
    large
)
    slot
</template>

<script>
export default {
    name: "CustomButton",
    props: {
        disabled: Boolean,
        outlined: Boolean,
        to: [String, Object],
        small: Boolean,
        color: {
            default: "accent"
        }
    }
}
</script>

<style lang="sass" scoped>
.v-btn
    text-transform: none
    font-weight: 700
    .v-btn--outlined
        // border: thin solid #A05A4B
        // color: #A05A4B
</style>