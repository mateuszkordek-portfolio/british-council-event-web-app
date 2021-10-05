export default {
    data: () => ({
        textRules: [
            val => {
                if (val) return true
                else return 'Pole jest wymagane'
            },
        ],
        passwordRules: [
            val => {
                if (val) return true
                else return 'Pole jest wymagane'
            },
        ],
        termsRules: [
            val => {
                if (val) return true
                else return 'Wymagane zaakceptowanie regulaminu'
            },
        ],
        privacyRules: [
            val => {
                if (val) return true
                else return 'Wymagane zaakceptowanie Polityki Prywatności'
            },
        ],
        paymentRules: [
            val => {
                if (val) return true
                else return 'Wybierz metodę płatności'
            },
        ],

        emailRules: [
            val => {
                if (!val) {
                    return 'Pole jest wymagane'
                } else if (
                    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                        val
                    )
                ) {
                    return 'Podaj poprawny adres e-mail. Upewnij się, że nie ma w nim spacji.'
                } else {
                    return true
                }
            },
        ],
        phoneRules: [
            phone => {
                if (!phone) {
                    return true
                } else if (!/(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}/.test(phone)) {
                    return "Niepoprawny format numeru telefonu"
                } else return true
            }
        ],
    })
}