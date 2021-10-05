import axios from "@/store/axiosInstance";
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

const demoUser = {
    username: "Gość",
    nickname: "Gość"
}

const authentication = {
    namespaced: true,

    state: {
        user: null,
    },

    getters: {
        getUser(state) {
            return state.user
        }
    },

    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        consoleLog(state, data) {
            console.log(data);
        },
        BLOCK_USER(state) {
            state.user.isBlocked = true
        }
    },

    actions: {
        async loginAdminAction({ commit, dispatch }, credentials) {
            try {
                // uzyskiwanie tokenu
                const authResponse = await axios.post("/users/login", credentials)
                const token = authResponse.data.data.token



                // zapisywanie tokenu do local storage
                dispatch("saveTokenToStorage", token)

                // pobiera usera i ustawia w storze
                const whoamiResponse = await axios.get("/users/whoami");
                let user = whoamiResponse.data.data
                commit("SET_USER", user);
            } catch (error) {
                throw new Error(error.response.status);
            }
        },
        async loginUserAction({ commit }) {
            // pobiera usera i ustawia w storze
            try {
                commit("SET_USER", demoUser);
            } catch (error) {
                throw new Error(error.response.status);
            }
        },

        // demo
        async createUserAction({ commit, dispatch }) {
            try {
                // zapisywanie tokenu do local storage
                dispatch("saveTokenToStorage", 'demo-token')
                commit("SET_USER", demoUser);
            } catch (error) {
                throw new Error(error.response.status);
            }

        },

        // prod
        // async createUserAction({ commit, dispatch }) {
        //     const newUser = {
        //         username: uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }),
        //         password: uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] })
        //     }

        //     try {
        //         // tworzenie uzytkownika w bazie
        //         await axios.post("/users", newUser)

        //         // uzyskiwanie tokenu
        //         const authResponse = await axios.post("/users/login", newUser)
        //         const token = authResponse.data.data.token

        //         // zapisywanie tokenu do local storage
        //         dispatch("saveTokenToStorage", token)

        //         // pobiera usera i ustawia w storze
        //         const whoamiResponse = await axios.get("/users/whoami");
        //         let user = whoamiResponse.data.data
        //         commit("SET_USER", user);
        //     } catch (error) {
        //         throw new Error(error.response.status);
        //     }

        // },

        async updateUserData({ commit, dispatch }, userData) {
            // otrzymuje userData = {nickname}
            try {
                // update uzytkownika w bazie
                const updateResponse = await axios.post("/users/update-self", userData)
                console.log(updateResponse)

                // ustawia usera
                let user = updateResponse.data.data
                commit("SET_USER", user);
            } catch (error) {
                throw new Error(error.response.status);
            }
        },

        saveTokenToStorage({ commit, dispatch }, token) {
            localStorage.setItem("loggedUser", token);
        },

        removeUserToken() {
            localStorage.removeItem("loggedUser")
        }
    },
};

export default authentication