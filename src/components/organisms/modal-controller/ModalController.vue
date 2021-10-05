<template lang="pug">
div(class="loading-module")
    //- ladowanie
    v-dialog(
        v-model="loadingModal"
        persistent
        max-width="250px"
    )
        v-card(class="d-flex align-center justify-center flex-column px-8 py-7")
            v-progress-circular(
                indeterminate
                color="primary"
                class="mb-4"
            )
            h3(class="mb-0") Proszę czekać

    //- modal z komunikatami
    v-dialog(
        v-model="infoModal"
        persistent
        max-width="450px"
    )
        v-card(class="d-flex align-center justify-center flex-column px-8 py-7")
            div(
                class="mb-4 text-center"
                v-html="infoText"
            )
            CustomButton(
                @click="infoModal = false"
                v-on:keyup.enter="infoModal = false"
            ) Zamknij
</template>

<script>
export default {
    data: () => ({
        // ladowanie
        loadingModal: false,

        // komunikat
        infoModal: false,
        infoText: null
    }),

    mounted() {
        this.$bus.$on("setLoading", (val) => (this.loadingModal = val))
        this.$bus.$on("openInfoModal", (val) => {
            if (!!this.loadingModal) {
                this.loadingModal = false
            }
            this.infoText = val
            this.infoModal = true
        })
    }
}
</script>