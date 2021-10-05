<template lang="pug">
.chat-input-container.d-flex.align-center.justify-center.py-2
    .text-field-wrapper.d-flex.align-center
        v-text-field(
            placeholder="Wiadomość"
            solo
            hide-details
            flat
            autocomplete="off"
            :disabled="error"
            v-model="message"
            @keyup.enter="sendMessage()"
        )
        v-btn.ml-2(
            height="48px"
            color="primary"
            depressed
            @click="sendMessage()"
        )
            span.font-weight-bold(
                style="text-transform: none"
            ) Wyślij
        v-tooltip(
            bottom
        )
            template(
                v-slot:activator="{ on, attrs }"
            )
                v-btn.ml-1(
                    height="48px"
                    color="default"
                    depressed
                    @click="toggleSounds()"
                    v-bind="attrs"
                    v-on="on"
                )
                    v-icon(
                        v-if="soundsActive"
                    ) mdi-volume-high
                    v-icon(
                        v-else
                    ) mdi-volume-mute
            span Włącz/wyłącz dźwięki czatu
</template>

<script>
export default {
    props: {
        error: Boolean,
        soundsActive: Boolean
    },

    data: () => ({
        message: ""
    }),

    methods: {
        sendMessage() {
            if (this.message && !this.error) {
                this.$emit("new-message", this.message)
                this.message = ""
            }
        },

        toggleSounds() {
            this.$emit("toggle-sounds")
        }
    }
}
</script>

<style lang="sass" scoped>
.chat-input-container
    // position: absolute
    bottom: 0
    width: 100%
    height: auto
    background-color: rgba(0, 0, 0, 0.1)
    border-radius: 10px

.text-field-wrapper
    width: calc(100% - 20px)
</style>

