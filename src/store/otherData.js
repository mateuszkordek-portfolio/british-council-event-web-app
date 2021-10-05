import { convertD2W, convertDBDateToTimestamp, getDateFromTimestamp } from '@/store/utils'

const otherData = {
    namespaced: true,
    state: {
        // regulaminy
        regulations: {
            cookies: 'https://www.britishcouncil.pl/ciasteczka',
            terms: 'https://www.britishcouncil.pl/ochrona-danych-osobowych',
            poster: ''
        },

        // kontakt
        contact: {
            email: ""
        },
        socialMedia: {
            facebook: "https://www.facebook.com/events/1130029340855084?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22external%22%7D%2C%7B%22mechanism%22%3A%22search_results%22%2C%22surface%22%3A%22search%22%7D]%2C%22ref_notif_type%22%3Anull%7D",
            instagram: "https://www.instagram.com/britishcouncilpoland/",
            youtube: "https://www.youtube.com/user/BritishCouncilPL"
        },
    },

    getters: {
        getRegulations(state) {
            return state.regulations
        },
        getSocialMedia(state) {
            return state.socialMedia
        },
        getContact(state) {
            return state.contact
        },
    },
}

export default otherData