<template lang="pug">
div(
    style="height: calc(100vh - 64px); background-color: white"
)
    div(
        v-if="slugActiveLiveTransmission"
        style="width: 100%; height: 100%"
        class="relative"
    )
        Chat(
            width="100%"
            height="100%"
            :isAdmin="!!getUser && (getUser.accountType == 'ADMIN' || getUser.accountType == 'SUPERADMIN')"
            :isSuperAdmin="!!getUser && getUser.accountType == 'SUPERADMIN'"
            :isBlocked="!!getUser && getUser.isBlocked"
            :authorIdProp="!!getUser && getUser._id"
            :channel="slugActiveLiveTransmission._id.toString()"
        )
    div(
        class="d-flex align-center justify-center"
        style="width: 100%; height: 100%"
        v-else
    )
        h3 Nie ma takiego czatu.
</template>

<script>
import { mapGetters } from "vuex"
import Chat from "@/components/organisms/chat-module/Chat"
import ChatNotAvailable from "@/components/organisms/chat-module/ChatNotAvailable"
export default {
    components: {
        Chat,
        ChatNotAvailable
    },
    computed: {
        ...mapGetters("eventData", ["getActiveLiveTransmissions"]),
        slugActiveLiveTransmission() {
            return this.getActiveLiveTransmissions.find(
                (a) => a.slug == this.$route.params.slug
            )
        }
    },
    mounted() {
        this.removeWidowsAndOrphans()
    }
}
</script>