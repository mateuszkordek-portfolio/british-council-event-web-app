<template lang="pug">
div
    v-container
        CustomSpacer
        MainHeader(
            bar
        ) Nagrania transmisji
        BigCard(class="text-card") Zapraszamy do obejrzenia transmisji, które odbyły się podczas Dni Otwartych.
        CustomSpacer
        CustomSpacer
        div(
            v-for="(day, index) in days"
            :key="index"
            class="mb-12"
        )
            h2(class="mb-1") {{ day.title }}
            v-divider(class="mt-4 mb-4")
            v-row
                v-col(
                    :cols="phone ? 12 : phablet ? 12 : desktop ? 12 : 12"
                    v-for="(video, index) in day.recordings"
                    :key="index"
                    :class="!phablet ? 'my-7 px-5' : 'my-2'"
                )
                    v-responsive(
                        :aspect-ratio="16 / 9"
                        width="100%"
                        class="radius"
                    )
                        VideoPlayer(
                            ref="videoPlayer"
                            :video="video"
                            :autoplay="false"
                        )
</template>

<script>
import VideoPlayer from "@/components/organisms/VideoPlayer"

export default {
    components: {
        VideoPlayer
    },

    data: () => ({
        days: [
            {
                title: "2 września 2021",
                recordings: [
                    {
                        link: "tgL_9UBwv6I"
                    },
                    {
                        link: "VzWl7njPxK4"
                    },
                    {
                        link: "ApAjwRo58no"
                    }
                ]
            },
            {
                title: "3 września 2021",
                recordings: [
                    {
                        link: "QyFYGt4tqec"
                    },
                    {
                        link: "_prGrTwBrLE"
                    },
                    {
                        link: "bSRjJJ-aO00"
                    }
                ]
            },
            {
                title: "4 września 2021",
                recordings: [
                    {
                        link: "kYOeYyxz1RE"
                    },
                    {
                        link: "MdlqST-YwHs"
                    },
                    {
                        link: "wKTid85VufM"
                    }
                ]
            },
            {
                title: "5 września 2021",
                recordings: [
                    {
                        link: "3eapxauaOs4"
                    },
                    {
                        link: "CUdUoeiVQdU"
                    },
                    {
                        link: "bD9MsowIrCQ"
                    }
                ]
            },
            {
                title: "6 września 2021",
                recordings: [
                    {
                        link: "Z73V2I72fbA"
                    },
                    {
                        link: "SUqDhzaAVxU"
                    }
                ]
            }
        ]
    }),

    mounted() {
        this.removeWidowsAndOrphans()
    }
}
</script>