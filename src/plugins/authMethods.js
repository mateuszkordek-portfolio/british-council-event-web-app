import { mapActions, mapMutations } from "vuex";

export default {
    methods: {
        ...mapActions("authentication", [
            "loginUserAction",
            "createUserAction"
        ]),

        ...mapMutations(["SET_FETCHED"]),

        async enterPlatform() {
            let token = localStorage.getItem("loggedUser");
            if (!!token) {
                // console.log('loguje ze storage')
                let modalText
                try {
                    await this.loginUserAction()
                    // this.SET_FETCHED(true)
                } catch (error) {
                    modalText = `
                        <h4 class='mb-1'>Ups. Coś poszło nie tak.</h4>
                        <div>Jeśli problem będzie nadal występował, skontaktuj się z nami.</div>
                    `
                    this.$bus.$emit('openInfoModal', modalText)
                }
            } else {
                // console.log('tworzy usera')
                let modalText
                try {
                    await this.createUserAction()
                    // this.SET_FETCHED(true)
                } catch (error) {
                    modalText = `
                        <h4 class='mb-1'>Ups. Coś poszło nie tak.</h4>
                        <div>Jeśli problem będzie nadal występował, skontaktuj się z nami.</div>
                    `
                    this.$bus.$emit('openInfoModal', modalText)
                }
            }
        },

        async logoutAdmin() {
            localStorage.removeItem("loggedUser");
            let modalText
            try {
                await this.createUserAction()
            } catch (error) {
                modalText = `
                        <h4 class='mb-1'>Ups. Coś poszło nie tak.</h4>
                        <div>Jeśli problem będzie nadal występował, skontaktuj się z nami.</div>
                    `
                this.$bus.$emit('openInfoModal', modalText)
            }
        }

        // async logInProceed() {
        //     let valid = this.$refs.signInForm.validate(

        //     )
        //     // let valid = true

        //     if (valid) {
        //         this.$bus.$emit('setLoading', true)

        //         // przygotowuje obiekt do wysylki
        //         let userToLogIn = {
        //             email: this.signInForm.email.toLowerCase(),
        //             password: this.signInForm.password,
        //         }

        //         let modalText

        //         try {
        //             await this.logInAction(userToLogIn)

        //             // przypisuje komunikat sukcesu
        //             modalText = `
        //                 <h4>Pomyślnie zalogowano.</h4>
        //             `

        //             this.$router.push({ name: 'user-root' })

        //             // pokazuje komunikat
        //             this.$bus.$emit('openInfoModal', modalText)
        //         } catch (error) {
        //             // przypisuje komunikat bledu
        //             if (error.message == 401) {
        //                 modalText = `
        //                     <h4 class='mb-1'>Niepoprawne dane logowania.</h4>
        //                 `
        //             } else if (error.message == 406) {
        //                 modalText = `
        //                     <h4 class='mb-1'>Udało się! Twoje konto zostało przygotowane.</h4>
        //                     <p>Dostęp do platformy Targów Pracy AGH będzie możliwy w poniedziałek od godz. 9:50 z wykorzystaniem tej strony. Do zobaczenia!</p>
        //                 `
        //             } else {
        //                 modalText = `
        //                     <h4 class='mb-1'>Ups. Coś poszło nie tak.</h4>
        //                     <div>Jeśli problem będzie nadal występował, skontaktuj się z nami.</div>
        //                 `
        //             }
        //             this.$bus.$emit('openInfoModal', modalText)
        //         }
        //     }
        // },
    },
};
