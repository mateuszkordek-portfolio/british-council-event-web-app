import Vue from 'vue'
import Vuex from 'vuex'

import Authentication from "@/store/authentication";
import EventData from "@/store/eventData";
import OtherData from '@/store/otherData';

Vue.use(Vuex)

function setChatSound() {
    let chatSettingFromStorage = localStorage.getItem('chatSound')
    let bool = chatSettingFromStorage ? JSON.parse(chatSettingFromStorage) : true
    return bool
}

export default new Vuex.Store({
    state: {
        isFetched: true,
        chatSound: setChatSound()
    },
    mutations: {
        SET_FETCHED(state, data) {
            state.isFetched = data
        },
        SET_CHAT_SOUND(state, data) {
            state.chatSound = data
            localStorage.setItem('chatSound', data)
        }
    },
    getters: {
        isFetched(state) {
            return state.isFetched
        },
        getChatSound(state) {
            return state.chatSound
        }
    },
    modules: {
        authentication: Authentication,
        eventData: EventData,
        otherData: OtherData,
    }
})
