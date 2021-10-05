<template lang="pug">
v-row(
    :class="{ right: isAuthor, admin: isAdminAuthor, superadmin: isSuperAdminAuthor }"
)
    .msg(
        @click="showTime()"
    )
        p.author {{ getFullAuthorData() }}
        p.text(
            v-html="message"
        )

    v-expand-transition
        div(
            class="additional-info"
            v-if="isVisible"
        )
            .time(
                :class="{ ralign: isAuthor }"
            )
                p Wysłano: {{ readableTime }}

            .controls.pt-2.pb-4(
                v-if="isAdmin || isSuperAdmin"
                :class="{ right: isAuthor }"
            )
                a(
                    @click="handleDeleteMessage()"
                ) Usuń wiadomość u wszystkich
                a(
                    v-if="!isAdminAuthor"
                    @click="handleBlockUser()"
                ) Zablokuj użytkownika
</template>

<script>
import moment from "moment"

export default {
    data: () => ({
        isVisible: false,
        readableTime: ""
    }),

    props: {
        isAuthor: Boolean,
        message: String,
        authorName: String,
        authorId: String,
        isAdminAuthor: Boolean,
        isSuperAdminAuthor: Boolean,
        isAdmin: Boolean,
        isSuperAdmin: Boolean,
        time: Number,
        id: String
    },

    created() {
        this.readableTime = moment(this.time).format("HH:mm")
    },

    methods: {
        getFullAuthorData() {
            if (this.isAdminAuthor && !this.isSuperAdminAuthor)
                return `${this.authorName} | Twórca platformy`
            else if (this.isAdminAuthor && this.isSuperAdminAuthor)
                return `${this.authorName} | Organizator`
            else return this.authorName
        },

        showTime() {
            this.isVisible = true
            const timeout = this.isAdmin === true ? 5000 : 2000

            setTimeout(() => {
                this.isVisible = false
            }, timeout)
        },

        handleDeleteMessage() {
            this.$socket.emit("deleteMsg", this.id)
        },

        handleBlockUser() {
            this.$socket.emit("blockUser", this.authorId)
        }
    }
}
</script>

<style lang="sass">
.right
    display: flex
    justify-content: flex-end
    .msg
        background-color: rgba(0, 0, 0, 0.1)

.admin
    .msg
        background-color: var(--v-custom-purple-base)
        color: white

        a
            color: white !important

.superadmin
    .msg
        // background-color: #fdc139
        // color: black
        background-color: var(--v-primary-base)
        color: white
        a
            color: black !important
.msg
    display: inline
    background-color: rgba(0, 0, 0, 0.1)
    padding: 10px
    border-radius: 10px
    margin-bottom: 5px
    margin-top: 5px

    .author
        font-size: 14px
        margin-bottom: 3px
        font-weight: 700
    .text
        font-size: 14px
        margin-bottom: 0

.additional-info
    width: 100%
    .time
        p
            font-size: 12px
            margin-bottom: 0
            color: #757575

        &.ralign p
            text-align: right

    .controls
        a
            font-size: 14px
            display: block
            text-decoration: underline
</style>