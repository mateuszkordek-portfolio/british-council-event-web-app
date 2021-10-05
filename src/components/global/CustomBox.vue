<template lang="pug">
v-card(
    class="custom-box"
    :class="phone ? 'px-3 py-4' : 'pa-7'"
    elevation="0"
    style="border-radius: 0 10px 0 10px"
    :style="[shadow ? { 'box-shadow': '0px 5px 45px rgba(184, 184, 184, 0.22) !important' } : {}]"
    :width="width"
    :height="height"
    :to="to"
    @click="$emit('click')"
)
    slot
</template>

<script>
export default {
    props: {
        height: {
            type: String,
            default: "100%"
        },
        width: {
            type: String,
            default: "100%"
        },
        shadow: Boolean,
        to: [String, Object]
    }
}
</script>
