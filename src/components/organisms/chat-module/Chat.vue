<template lang="pug">
div(
    :style="style"
    style="transition: 0.2s all ease-in-out; height: 100%"
    class="d-flex flex-column justify-space-between"
)
    div(
        class="scrollable"
        ref="messageList"
    )
        v-container(
            v-if="chatReady && !chatError"
            class="pl-5 pr-5"
        )
            chat-message(
                v-for="(message, index) in messages"
                :key="index"
                :is-author="message.isAuthor"
                :author-name="message.authorName"
                :author-id="message.authorId"
                :message="message.message"
                :is-admin-author="message.isAdmin"
                :is-super-admin-author="message.isSuperAdmin"
                :is-admin="isAdmin"
                :is-super-admin="isSuperAdmin"
                :time="message.time"
                :id="message._id"
            )

        chat-loader(
            v-if="!chatReady"
        )

        chat-error(
            v-if="chatError"
        )
    chat-input(
        :error="chatError"
        :sounds-active="soundsActive"
        @new-message="handleNewMessage"
        @toggle-sounds="toggleSounds"
        v-if="showChatInput"
    )
    chat-set-user(
        v-else
    )
</template>

<script>
import howler from "howler"
import axios from "@/store/axiosInstance"
import { mapActions, mapMutations, mapGetters } from "vuex"

import ChatMessage from "./chat-submodules/ChatMessage"
import ChatInput from "./chat-submodules/ChatInput"
import ChatLoader from "./chat-submodules/ChatLoader"
import ChatError from "./chat-submodules/ChatError"
import ChatSetUser from "./chat-submodules/ChatSetUser"

const serverApiUrl = process.env.VUE_APP_WS_SERVER

export default {
    components: {
        ChatMessage,
        ChatInput,
        ChatLoader,
        ChatError,
        ChatSetUser
    },

    props: {
        channel: String,
        width: String,
        height: String,
        isAdmin: {
            type: Boolean,
            default: false
        },
        isSuperAdmin: {
            type: Boolean,
            default: false
        },
        authorIdProp: String,
        isBlocked: Boolean
    },

    data: () => ({
        currentChannel: null,
        chatReady: false,
        chatError: false,
        messages: [],
        blocked: false,
        authorId: null,
        authToken: null,
        sound: null,
        soundsActive: true
    }),

    mounted() {
        // this.sound = new Howl({
        //     src: "/notification.mp3",
        //     volume: 0.5
        // })
        // this.sound.play()

        let context
        window.onload = function () {
            context = new AudioContext()
        }

        document.addEventListener("click", function (e) {
            if (e.target.closest(".d-flex")) {
                context.resume().then(() => {
                    source.start(0)
                })
            }
        })
    },

    async created() {
        try {
            this.currentChannel = this.channel || "general"

            this.authorId = this.authorIdProp
            this.blocked = this.isBlocked

            this.authToken = localStorage.getItem("loggedUser")

            this.sound = new Howl({
                src: "/notification.mp3",
                volume: 0.5,
                html5: true
            })

            const sampleMessages = [
                {
                    message: "Cześć",
                    authorName: "Mateusz",
                    time: 1633267983000,
                    isAdmin: true
                },
                {
                    message:
                        "W wersji demonstracyjnej wszystkie czaty są wyłączone",
                    authorName: "Mateusz",
                    time: 1633267983000,
                    isAdmin: true
                },
                {
                    message: "Mimo to, proszę o zachowanie kultury 😇",
                    authorName: "Mateusz",
                    time: 1633267983000,
                    isAdmin: true
                },
                {
                    message: "Rozejrzyj się i daj znać jak Ci się podoba ✌️",
                    authorName: "Mateusz",
                    time: 1633267983000,
                    isAdmin: true
                }
            ]

            let i = 0

            let interval = setInterval(() => {
                this.messages.push(sampleMessages[i])
                i++
                if (this.soundsActive) this.sound.play()
                if (i == sampleMessages.length) clearInterval(interval)
            }, 1800)

            // sampleMessages.forEach((msg) => {
            //     setTimeout(() => {
            //         this.messages.push(msg)
            //     }, 1000)
            // })

            // const response = await axios.get(
            //     `${serverApiUrl}/chat/recent/${this.currentChannel}`
            // )
            // const resData = response.data.data

            // if (resData.length > 0) {
            //     this.messages = resData.map((msg) => {
            //         return {
            //             isAuthor: this.authorId === msg.authorId,
            //             message: msg.content,
            //             authorName: msg.authorName,
            //             authorId: msg.authorId,
            //             time: msg.time,
            //             isAdmin: msg.isAdmin,
            //             isSuperAdmin: msg.isSuperAdmin,
            //             _id: msg._id
            //         }
            //     })
            // }

            this.makeChatReady()
        } catch (error) {
            console.error(error)
            this.makeChatError()
        }
    },

    computed: {
        ...mapGetters(["getChatSound"]),
        style() {
            let style = ""
            if (this.width) style += `width: ${this.width}; `
            else style += `width: 100% `

            if (this.height) style += `height: ${this.height} `
            else style += `height: 100%; `
            return style
        },
        showChatInput() {
            if (!this.getUser.nickname) {
                return false
            } else return true
        }
    },

    sockets: {
        message: function (data) {
            if (data.channel === this.currentChannel) {
                let newMessage = {
                    _id: data._id,
                    isAuthor: this.authorId === data.authorId ? true : false,
                    message: data.content,
                    authorName: data.authorName,
                    authorId: data.authorId,
                    time: data.time,
                    isAdmin: data.isAdmin,
                    isSuperAdmin: data.isSuperAdmin
                }

                this.messages.push(newMessage)

                if (this.soundsActive) this.sound.play()

                setTimeout(() => {
                    if (!!this.$refs.messageList)
                        this.$refs.messageList.scrollTop =
                            this.$refs.messageList.scrollHeight
                }, 50)
            }
        },

        deleteMsg: function (idToDel) {
            const indexOfResult = this.messages.reduce(
                (indexFound, val, currentIndex) => {
                    if (this.messages[currentIndex]._id === idToDel) {
                        indexFound = currentIndex
                    }
                    return indexFound
                },
                -1
            )

            if (indexOfResult >= 0) {
                this.messages.splice(indexOfResult, 1)
            }
        },

        blockUser: function (id) {
            // console.log('blockUser', id);
            if (id === this.authorId) this.blocked = true
        }
    },
    methods: {
        ...mapActions("authentication", ["blockUserInStoreAndLocalStorage"]),
        ...mapMutations(["SET_CHAT_SOUND"]),

        handleNewMessage(newMsg) {
            // this.$socket.emit("message", {
            //     authorId: this.authorId,
            //     content: newMsg,
            //     channel: this.currentChannel,
            //     authToken: this.authToken
            // })
        },

        toggleSounds() {
            this.soundsActive = !this.soundsActive
        },

        makeChatReady() {
            this.chatReady = true
            setTimeout(() => {
                if (!!this.$refs.messageList)
                    this.$refs.messageList.scrollTop =
                        this.$refs.messageList.scrollHeight
            }, 500)
        },

        makeChatError() {
            this.chatReady = true
            this.chatError = true
        }
    },

    watch: {
        blocked: function (newVal) {
            if (newVal == true) {
                this.makeChatError()
                this.$emit("chat-blocked")
                this.blockUserInStoreAndLocalStorage()
            }
        },
        soundsActive: {
            handler(val) {
                this.SET_CHAT_SOUND(val)
            }
        },
        getChatSound: {
            immediate: true,
            handler(val) {
                this.soundsActive = this.getChatSound
            }
        }
    }
    // mounted() {
    //     this.soundsActive = this.getChatSound
    // },
}
</script>

<style lang="sass" scoped>
.scrollable
    width: 100%
    // height: calc(100% - 100px)
    flex-grow: 1

    overflow-y: scroll
</style>