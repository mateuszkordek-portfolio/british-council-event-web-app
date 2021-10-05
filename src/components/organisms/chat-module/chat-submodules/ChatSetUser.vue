<template lang="pug">
.chat-set-user-container.d-flex.align-center.justify-center
    v-form(
        ref="setChatUserForm"
        style="width: 90%"
    )
        div(class="mt-4 mb-4 text-center") Ustaw swój nick, aby móc aktywnie korzystać z czatu.
        div(
            :class="phone ? 'flex-column my-3' : 'mt-3'"
            class="text-field-wrapper d-flex align-start justify-center"
        )
            v-text-field(
                placeholder="Nick"
                solo
                flat
                v-model="user.nickname"
                @keyup.enter="updateChatUser()"
                :rules="textRules"
                :style="phone ? { width: '100%' } : {}"
                style="max-width: 350px"
                rounded
                class="mr-1"
            )
            input(
                style="display: none"
            )
            v-btn(
                height="48px"
                color="accent"
                depressed
                rounded
                @click="updateChatUser()"
                :style="phone ? { width: '100%' } : {}"
            )
                span.font-weight-bold(
                    style="text-transform: none"
                ) Ustaw
</template>

<script>
import formRules from "@/plugins/formRules"
import { mapActions } from "vuex"
export default {
    mixins: [formRules],
    data: () => ({
        user: {
            nickname: null
        }
    }),

    methods: {
        ...mapActions("authentication", ["updateUserData"]),
        async updateChatUser() {
            let valid = this.$refs.setChatUserForm.validate()
            if (valid) {
                let modalText
                try {
                    await this.updateUserData(this.user)
                } catch (error) {
                    modalText = `
                        <h4 class='mb-1'>Ups. Coś poszło nie tak.</h4>
                        <div>Jeśli problem będzie nadal występował, skontaktuj się z nami.</div>
                    `
                    this.$bus.$emit("openInfoModal", modalText)
                }
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.chat-set-user-container
    // position: absolute
    bottom: 0
    width: 100%
    height: auto
    background-color: rgba(0, 0, 0, 0.1)
    border-radius: 0 10px 0 10px

.text-field-wrapper
    // width: calc(100% - 20px)
    width: 100%
</style>