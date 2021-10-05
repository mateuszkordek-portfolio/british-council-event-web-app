<template lang="pug">
v-card(
    color="white"
    :class="phone ? 'px-4 py-3' : phablet ? 'px-5 py-4' : 'px-8 py-6'"
    style="border-radius: 0 10px 0 10px; box-shadow: 0px 5px 45px rgba(184, 184, 184, 0.22)"
)
    slot
</template>