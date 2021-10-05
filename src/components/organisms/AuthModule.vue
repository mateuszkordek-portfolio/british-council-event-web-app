<template lang="pug">
div(
    class="d-flex align-center justify-center auth-bg"
    style="min-height: 100vh"
)
    v-card(
        class="relative"
        color="white"
        :class="phone ? 'pa-6 mx-4' : 'pa-12'"
        style="border-radius: 0 10px 0 10px; box-shadow: 0px 5px 45px rgba(184, 184, 184, 0.22); max-width: 500px; width: 100%; z-index: 1"
    )
        //- logo and header
        div(
            style="width: 100%"
            class="justify-center"
        )
            img(
                :src="darkLogoImage"
                width="100%"
                style="max-width: 230px"
            )
            h2(class="mt-8 mb-0")
                div Dni Otwarte
                div 2 - 6 września 2021

        //- divider
        div(
            style="width: 40px; height: 5px; background-color: #00c7f5"
            class="mt-10 mb-8"
        )

        //- slot
        h2(
            class="mb-7 mt-5"
            style="width: 100%"
        )
            slot

        //- info
        div(class="mb-8")
            //- div(class="mb-2") Hasło znajdziesz w swojej skrzynce odbiorczej – wysłaliśmy je na Twojego maila po rejestracji.
            //- div
            //-     span(class="mr-1") Więcej informacji o wydarzeniu znajdziesz na:

            //-     a(
            //-         target="_blank"
            //-         href="https://www.dniotwartezangielskim.pl"
            //-         style="font-weight: 600; display: inline-block"
            //-     ) www.dniotwartezangielskim.pl

            div Jesteś na wersji demo platformy.
            div Wpisz dowolne hasło ;)

        //- form
        v-form(
            ref="authForm"
            v-model="signInFormValid"
            lazy-validation
            style="width: 100%"
        )
            v-text-field(
                style="width: 100%"
                label="Hasło dostępu"
                v-model="authForm.password"
                :rules="[passwordRules]"
                v-on:keyup.enter="enterPlatformProceed"
                outlined
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
            )

            input(
                style="display: none"
            )

        //- button
        CustomButton(
            @click="enterPlatformProceed"
            style="width: 100%"
        ) Wejdź

        Sticker(
            fileName="back-to-school"
            style="top: -50px; left: -80px"
            v-if="!phablet"
        )
        Sticker(
            fileName="smile"
            style="bottom: -50px"
            v-if="!phablet"
        )
    Sticker(
        fileName="plane"
        style="top: 100px; right: 100px; z-index: 1"
        v-if="!phablet"
        size="80"
    )
    Sticker(
        fileName="rocket"
        style="bottom: 100px; left: 100px; z-index: 1"
        v-if="!phablet"
    )
    img(
        style="position: absolute; z-index: 0; width: 100%; height: 100%; object-fit: cover"
        src="@/assets/images/bg.png"
    )
</template>


<script>
import authMethods from "@/plugins/authMethods"
export default {
    mixins: [authMethods],

    data() {
        return {
            signInFormValid: null,
            authForm: {
                password: null
            },
            show1: false
        }
    },

    computed: {
        passwordRules() {
            return (val) => {
                if (!val) return "Wymagane podanie hasła"
                else return true
            }
        }
    },

    methods: {
        async enterPlatformProceed() {
            let valid = this.$refs.authForm.validate()
            if (valid) {
                try {
                    await this.enterPlatform()
                    this.$router.push("/")
                } catch (e) {}
            }
        }
    },
    mounted() {
        this.removeWidowsAndOrphans()
    }
}
</script>

<style lang="sass">

</style>