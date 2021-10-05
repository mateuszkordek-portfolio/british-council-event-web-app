<template lang="pug">
div(
    style="width: 100%; height: 100%"
    class="live-slug-view"
    v-if="!!isFetched"
)
    v-container(
        style="width: 100%; height: 100%"
        v-if="!!slugActiveLiveTransmission"
    )
        CustomSpacer
        div(class="d-flex justify-space-between align-center")
            div
                div(
                    style="font-size: 16px; font-weight: 600"
                    class="mb-2 d-flex align-center"
                )
                    img(
                        src="@/assets/emoji/live.gif"
                        height="20"
                        class="mr-1"
                    )
                    div Trwa transmisja!
                MainHeader(class="mb-0")
                    div(
                        v-html="slugActiveLiveTransmission.title"
                    )

        CustomButton(
            :to="{ name: 'live-chat-slug', params: { slug: slugActiveLiveTransmission.slug } }"
            v-if="phablet"
            depressed
        ) Włącz czat pełnoekranowy

        CustomButton(
            @click="theaterMode = true"
            v-if="!phablet"
        ) Włącz tryb kinowy

        CustomSpacer
        v-row
            //- wideo w normalny trybie
            v-col(
                :cols="phablet ? 12 : 6"
            )
                div(
                    class="normal-mode-chat-height-provider"
                    style="height: auto"
                )
                    v-responsive(
                        :aspect-ratio="16 / 9"
                        width="100%"
                        class="radius"
                    )
                        VideoPlayer(
                            ref="videoPlayer"
                            :video="slugActiveLiveTransmission"
                            style="background-color: var(--v-custom-grey-base)"
                        )

                    div(
                        v-if="!phablet"
                    )
                        CustomSpacer
                        BigCard
                            v-expansion-panels(
                                flat
                            )
                                v-expansion-panel(
                                    style="border-radius: 10px !important"
                                    @change="expanded = !expanded"
                                )
                                    v-expansion-panel-header(
                                        class="font-weight-bold px-0"
                                        style="line-height: 1.5; width: 55px; color: var(--v-primary-base)"
                                    ) Opis
                                        template(
                                            v-slot:actions
                                        )
                                            v-icon(
                                                v-if="expanded"
                                                style="transition: 0.2s all ease-in-out"
                                                size="16"
                                            ) mdi-minus
                                            v-icon(
                                                v-if="!expanded"
                                                style="transition: 0.2s all ease-in-out"
                                                size="16"
                                            ) mdi-plus
                                    v-expansion-panel-content(class="primary--text")
                                        div(
                                            v-html="slugActiveLiveTransmission.desc1"
                                        )
                                        div(
                                            v-html="slugActiveLiveTransmission.desc2"
                                            style="font-size: 14px"
                                        )

            //- czat
            v-col(
                :cols="phablet ? 12 : 6"
            )
                v-card(
                    elevation="0"
                    color="white"
                    style="border-radius: 10px; overflow: hidden; position: relative"
                    class="normal-mode-chat"
                    height="100%"
                )
                    div(
                        style="height: 100%"
                    )
                        Chat(
                            width="100%"
                            :height="normalModeChatHeight"
                            :isAdmin="!!getUser && (getUser.accountType == 'ADMIN' || getUser.accountType == 'SUPERADMIN')"
                            :isSuperAdmin="!!getUser && getUser.accountType == 'SUPERADMIN'"
                            :isBlocked="!!getUser && getUser.isBlocked"
                            :authorIdProp="!!getUser && getUser._id"
                            :channel="slugActiveLiveTransmission._id.toString()"
                        )

            v-col(
                cols="12"
                v-if="phablet"
            )
                BigCard
                    v-expansion-panels(
                        flat
                    )
                        v-expansion-panel(
                            style="border-radius: 10px !important"
                            @change="expanded = !expanded"
                        )
                            v-expansion-panel-header(
                                class="font-weight-bold px-0"
                                style="line-height: 1.5; width: 60px"
                            ) Opis
                                template(
                                    v-slot:actions
                                )
                                    v-icon(
                                        v-if="expanded"
                                        style="transition: 0.2s all ease-in-out"
                                        size="16"
                                    ) mdi-minus
                                    v-icon(
                                        v-if="!expanded"
                                        style="transition: 0.2s all ease-in-out"
                                        size="16"
                                    ) mdi-plus

                            v-expansion-panel-content(class="primary--text")
                                div(
                                    v-html="slugActiveLiveTransmission.desc1"
                                )
                                div(
                                    v-html="slugActiveLiveTransmission.desc2"
                                    style="font-size: 14px"
                                )

    //- nie znaleziono
    div(
        class="d-flex align-center justify-center flex-column"
        style="width: 100%; height: 100%"
        v-else
    )
        img(
            src="@/assets/stickers/camera.png"
            width="150px"
        )
        h3(class="text-center mt-6") Ta transmisja jest w tej chwili niedostępna.

    //- tryb kinowy
    v-dialog(
        v-model="theaterMode"
        content-class="theater-modal"
        overlay-opacity=".9"
        style="overflow: hidden"
        width="90%"
        class="d-flex align-center justify-center"
        v-if="!!slugActiveLiveTransmission"
    )
        v-card(
            :height="!!slugActiveLiveTransmission ? theaterModalHeight : '600px'"
            width="100%"
            class="theater-modal-height-provider theater-modal-content d-flex"
            style="border-radius: 10px; overflow: hidden"
            :class="showChatInTheaterMode ? 'with-chat' : ''"
        )
            div(class="theater-left")
                VideoPlayer(
                    ref="videoPlayerTheater"
                    :video="slugActiveLiveTransmission"
                    style="background-color: black"
                )
            div(
                class="theater-right"
                v-if="showChatInTheaterMode"
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

            div(class="theater-controls")
                div(class="buttons pt-3 pb-2 px-3 d-flex justify-end")
                    CustomButton(
                        @click="theaterMode = false"
                        class="mr-2"
                    ) Wyjdź z trybu pełnoekranowego
                    CustomButton(
                        @click="showChatInTheaterMode = !showChatInTheaterMode"
                    )
                        span(
                            v-if="!showChatInTheaterMode"
                        ) Pokaż czat
                        span(
                            v-if="showChatInTheaterMode"
                        ) Ukryj czat

                div(class="gradient-block")
</template>

<script>
import Chat from "@/components/organisms/chat-module/Chat"
import ChatNotAvailable from "@/components/organisms/chat-module/ChatNotAvailable"
import VideoPlayer from "@/components/organisms/VideoPlayer"
import { mapGetters } from "vuex"

export default {
    components: {
        Chat,
        VideoPlayer,
        ChatNotAvailable
    },
    data: () => ({
        theaterMode: false,
        showChatInTheaterMode: true,
        expanded: false,
        normalModeChatHeight: null,
        theaterModalHeight: "10px"
    }),
    computed: {
        ...mapGetters("eventData", ["getActiveLiveTransmissions"]),
        // ...mapGetters('authentication', ['getUser']),
        slugActiveLiveTransmission() {
            return this.getActiveLiveTransmissions.find(
                (a) => a.slug == this.$route.params.slug
            )
        },
        loaded() {
            return !!this.slugActiveLiveTransmission
        }
    },

    methods: {
        setNormalModeChatHeight() {
            this.normalModeChatHeight = !!this.phone
                ? "400px"
                : !!this.phablet
                ? "400px"
                : this.getHeightOfElement(
                      "normal-mode-chat-height-provider"
                  ).toString() + "px"
        },
        setTheaterModalHeight() {
            let windowWidth = window.innerWidth
            this.theaterModalHeight =
                (windowWidth * 0.9 * (9 / 16)).toString() + "px"
        }
    },

    watch: {
        expanded() {
            if (!this.phablet) {
                setTimeout(() => this.setNormalModeChatHeight(), 500)
            }
        },
        loaded: {
            immediate: true,
            handler(val) {
                if (!!val)
                    setTimeout(
                        () => (
                            this.setNormalModeChatHeight(),
                            this.setTheaterModalHeight()
                        ),
                        300
                    )
            }
        },
        theaterMode: {
            immediate: true,
            handler(val) {
                if (val) {
                    // wlaczony
                    if (!!this.$refs.videoPlayerTheater)
                        this.$refs.videoPlayerTheater.playVideo()
                    if (!!this.$refs.videoPlayer)
                        this.$refs.videoPlayer.stopVideo()
                } else {
                    if (!!this.$refs.videoPlayerTheater)
                        this.$refs.videoPlayerTheater.stopVideo()
                    if (!!this.$refs.videoPlayer)
                        this.$refs.videoPlayer.playVideo()
                }
            }
        }
    },
    mounted() {
        this.removeWidowsAndOrphans()
    }
}
</script>

<style lang="sass">
.theater-modal
    box-shadow: none

.theater-modal-content
    position: relative
    .theater-left
        width: 100%
    .theater-right
        width: 0%
    .theater-controls
        position: absolute
        right: 0
        top: 0
        height: auto
        width: 100%
        opacity: 0
        transition: .4s all ease-in-out
        .buttons
            // background: white
        .gradient-block
            width: 100%
            height: 10px
            // background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)
            // background: black

    &.with-chat
        .theater-left
            width: 65%
        .theater-right
            width: 35%
        .theater-controls
            width: 35%
    &:hover
        .theater-controls
            opacity: 1
            transition: 0s all ease-in-out

.normal-mode-chat
    .theater-enable-button
        position: absolute
        right: 0
        top: 0
        height: auto
        width: 100%
        opacity: 0
        transition: .4s all ease-in-out
        .button-container
            background: white
        .gradient-block
            width: 100%
            height: 10px
            background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)
    &:hover
        .theater-enable-button
            opacity: 1
            transition: 0s all ease-in-out
.live-slug-view
    .v-expansion-panel-content__wrap
        padding: 0
    .color-box
        border-radius: 0 10px 10px 0
</style>