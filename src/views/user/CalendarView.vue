<template lang="pug">
div(class="calendar-view relative")
    Sticker(
        fileName="lets-go"
        size="100"
        style="top: 30px; right: 50px"
        v-if="!phablet"
    )
    v-container
        CustomSpacer
        MainHeader(
            bar
        ) Kalendarz wydarzenia
        CustomSpacer(
            v-if="!phablet"
        )
        BigCard(class="d-flex flex-column align-center justify-center")
            Calendar(
                style="width: 100%"
            )
</template>

<script>
import Calendar from "@/components/organisms/Calendar"
export default {
    components: {
        Calendar
    },
    mounted() {
        this.removeWidowsAndOrphans()
    }
}
</script>