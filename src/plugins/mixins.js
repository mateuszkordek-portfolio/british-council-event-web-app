
import Vue from 'vue'
import { mapGetters } from 'vuex'
import moment from 'moment-timezone'

const mixins = {
    data: () => ({
        logoImage: require("@/assets/images/logo.png"),
        darkLogoImage: require("@/assets/images/logo-dark.png")
    }),

    computed: {
        ...mapGetters('authentication', ['getUser']),
        ...mapGetters(['isFetched']),
        isLoggedIn() {
            return !!this.getUser
        },
        userFullName() {
            if (this.isLoggedIn) return this.getUser.firstName + ' ' + this.getUser.lastName
            else return null
        },
    },
    methods: {
        openLink(link) {
            window.open(link, "_blank");
        },
        getLast3(arr) {
            return arr.slice(0, 3)
        },
        getHeightOfElement(containerClassName) {
            let container = document
                .getElementsByClassName(containerClassName)[0]
                .getBoundingClientRect()
            return container.height
        },
        getWidthOfElement(containerClassName) {
            let container = document
                .getElementsByClassName(containerClassName)[0]
                .getBoundingClientRect()
            return container.width
        },
        removeWidowsAndOrphans() {
            const lettersToReplace = ["a", "i", "o", "u", "w", "z", "A", "I", "O", "U", "W", "Z"]
            document.querySelectorAll('p').forEach(a => {
                let textReplace = a.innerHTML

                for (var i = 0; i < lettersToReplace.length; i++) {
                    let textSplit = textReplace.split(' ' + lettersToReplace[i] + ' ');
                    textReplace = textSplit.join(' ' + lettersToReplace[i] + '&nbsp;');
                }
                a.innerHTML = textReplace
            })
        },

        // moment-timezone.js methods
        getPLDateAndTimeFromTimestamp(timestamp) {
            return moment(timestamp, 'x').tz("Europe/Warsaw").format('DD/MM/YYYY HH:mm');
        },

        getPLDateFromTimestamp(timestamp) {
            return moment(timestamp, 'x').tz("Europe/Warsaw").format('DD/MM/YYYY');
        },

        getPLTimeFromTimestamp(timestamp) {
            // sluzy tylko do wyswietlania w programie
            return moment(timestamp, 'x').tz("Europe/Warsaw").format("HH:mm");
        },
        signUpToWorkshops() {
            window.open(
                "https://remoji.com/",
                "_blank"
            )
        }
    },
    filters: {
        sliceFirstLetters: function (name) {
            if (!!name) {
                var splittedNames;
                var regexp = /[a-zA-Z]+\s+[a-zA-Z]+/g;

                if (regexp.test(name)) {
                    splittedNames = name.split(' ');
                    return splittedNames[0].slice(0, 1) + splittedNames[1].slice(0, 1);
                } else {
                    return name.slice(0, 1);
                }
            }

        }
    }
}

Vue.mixin(mixins)