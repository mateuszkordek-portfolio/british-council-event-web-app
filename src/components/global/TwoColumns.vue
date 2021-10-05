<template lang="pug">
    v-row(
        class="two-columns"
    )
        //- bigger column
        v-col(
            :cols="phablet?12:6"
            :class="reversed?'order-2':''"
            v-if="!wide"
        )
            slot(
                name="bigger"
            )

        //- wide variant
        v-col(
            :cols="phablet?12:laptop?6:7"
            :class="reversed?'order-2':''"
            v-if="wide"
        )
            slot(
                name="bigger"
            )


        v-spacer(
            :class="reversed?'order-1':''"
        )

        //- smaller column
        v-col(
            :cols="phablet?12:laptop?5:desktop?4:4"
        )
            slot(
                name="smaller"
            )
</template>

<script>
export default {
    props: {
        reversed: Boolean,
        wide: Boolean,
    },
}
</script>