<template lang="pug">
div
    v-container(
        class="d-flex flex-column align-center justify-center"
        style="min-height: 100vh"
    )
        BigCard(
            class="text-card"
            style="max-width: 500px"
        )
            MainHeader(
                bar
            ) Logowanie administratora
            v-form(
                ref="adminForm"
                lazy-validation
                style="width: 100%"
                class="mb-4"
            )
                //- username
                v-text-field(
                    label="Adres e-mail"
                    v-model="formData.username"
                    outlined
                    validate-on-blur
                    :rules="emailRules"
                    dense
                )

                //- haslo
                v-text-field(
                    label="Hasło"
                    v-model="formData.password"
                    outlined
                    validate-on-blur
                    :rules="textRules"
                    v-on:keyup.enter="logInProceed"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                    dense
                )

                input(
                    style="display: none"
                )
            div(class="d-flex justify-end")
                CustomButton(
                    @click="logInProceed"
                    style="width: 100%"
                ) Zaloguj
</template>

<script>
import formRules from "@/plugins/formRules"
import { mapActions } from "vuex"
export default {
    mixins: [formRules],

    data: () => ({
        formData: null,
        show1: false
    }),

    methods: {
        ...mapActions("authentication", ["loginAdminAction"]),

        resetForm() {
            this.formData = {
                username: null,
                password: null
            }
        },
        async logInProceed() {
            let valid = this.$refs.adminForm.validate()
            if (valid) {
                let modalText
                try {
                    await this.loginAdminAction(this.formData)
                    modalText = `
                        <h4 class='mb-0'>Pomyślnie zalogowano.</h4>
                    `
                    this.$bus.$emit("openInfoModal", modalText)
                    this.resetForm()
                    this.$refs.adminForm.reset()
                    this.$router.push("/zacznij-tutaj")
                } catch (error) {
                    modalText = `
                        <h4 class='mb-1'>Ups. Coś poszło nie tak.</h4>
                        <div>Jeśli problem będzie nadal występował, skontaktuj się z nami.</div>
                    `
                    this.$bus.$emit("openInfoModal", modalText)
                }
            }
        }
    },

    created() {
        this.resetForm()
    }
}
</script>