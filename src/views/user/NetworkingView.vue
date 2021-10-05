<template lang="pug">
div(class="relative")
    Sticker(
        fileName="globe"
        size="90"
        style="transform: rotate(10deg); top: 20px; right: 60px"
        v-if="!phablet"
    )
    Sticker(
        fileName="bulb"
        size="50"
        style="transform: rotate(-30deg); top: 10px; right: 140px"
        v-if="!phablet"
    )
    v-container
        CustomSpacer

        MainHeader(
            bar
        ) Czat

        BigCard(class="text-card")
            div
                div(class="d-flex align-center justify-space-between mb-4")
                    h2(class="mb-0") Poznajmy się!
                    CustomButton(
                        @click="biggerChat = !biggerChat"
                        class=""
                        small
                    )
                        span(
                            v-if="biggerChat"
                        ) Zmniejsz okno czatu
                        span(
                            v-if="!biggerChat"
                        ) Zwiększ okno czatu
                div
                    p Skorzystaj z czatu, aby porozmawiać z innymi osobami biorącymi udział w Dniach Otwartych British Council. Wiadomość będzie widoczna dla wszystkich osób odwiedzających stronę.
                    div
                        span Potrzebujesz pomocy? Odwiedź zakładkę
                        router-link(
                            to="pomoc"
                            class="ml-1"
                            style="font-weight: 600"
                        ) Pomoc
                        span .
        CustomSpacer
        div(
            class="chat-wrapper radius"
            :class="biggerChat ? 'bigger' : ''"
        )
            Chat(
                width="100%"
                height="100%"
                :isAdmin="!!getUser && (getUser.accountType == 'ADMIN' || getUser.accountType == 'SUPERADMIN')"
                :isSuperAdmin="!!getUser && getUser.accountType == 'SUPERADMIN'"
                :isBlocked="!!getUser && getUser.isBlocked"
                :authorIdProp="!!getUser && getUser._id"
                channel="networking"
            )

        CustomSpacer
</template>

<script>
import Chat from "@/components/organisms/chat-module/Chat"
import ChatNotAvailable from "@/components/organisms/chat-module/ChatNotAvailable"
export default {
    components: {
        Chat,
        ChatNotAvailable
    },

    data: () => ({
        biggerChat: false
    }),

    mounted() {
        this.removeWidowsAndOrphans()
    }
}
</script>

<style lang="sass" scoped>
.chat-wrapper
    height: 300px
    background-color: #fff
    &.bigger
        height: 600px
</style>