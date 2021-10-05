<template lang="pug">
div
    div
        div(
            class="font-weight-bold mb-1"
            style="line-height: 1.4"
        ) {{ section.title }}
        h5(
            class="mb-2"
            style="line-height: 1.4; font-weight: 400"
        ) {{ section.titleEn }}

    //- glowna
    div(
        v-for="(subsection, index) in mainSubsections"
        :key="index + 'main'"
        class="d-flex mt-7"
        :class="phone ? 'flex-column' : 'align-center justify-space-between'"
    )
        div(class="pr-4")
            h5(
                style="font-weight: 600"
            ) Podsekcja główna
            div(
                style="font-weight: 400"
            )
                span(class="mr-1")
                    span(
                        v-if="subsection.hosts.length > 1"
                    ) Moderatorzy:
                    span(
                        v-else
                    ) Moderator:
                span(
                    v-for="(host, index) in subsection.hosts"
                    :key="index"
                )
                    span {{ host }}
                    span(
                        class="mr-1"
                        v-if="index != subsection.hosts.length - 1"
                    ) ,

        div(class="d-flex align-center")
            CustomButton(
                class="mr-2 mt-3 primary--text"
                small
                outlined
                @click="openLink(subsection.program)"
                v-if="!!subsection.program"
            )
                span Zobacz program
            CustomButton(
                @click="openLink(subsection.link)"
                class="mr-2 mt-3"
                small
            )
                span Przejdź do Teams
                v-icon(
                    size="15"
                    class="ml-1"
                ) mdi-arrow-right

    //- podsekcje
    div(
        v-for="(subsection, index) in subsectionsWithoutMainOnes"
        :key="index"
        class="d-flex mt-7"
        :class="phone ? 'flex-column' : 'align-center justify-space-between'"
    )
        div(class="pr-4")
            h5(
                style="font-weight: 600"
            ) Podsekcja {{ index + 1 }}
            div(
                style="font-weight: 400"
            )
                span(class="mr-1")
                    span(
                        v-if="subsection.hosts.length > 1"
                    ) Moderatorzy:
                    span(
                        v-else
                    ) Moderator:
                span(
                    v-for="(host, index) in subsection.hosts"
                    :key="index"
                )
                    span {{ host }}
                    span(
                        class="mr-1"
                        v-if="index != subsection.hosts.length - 1"
                    ) ,

        div(class="d-flex align-center")
            CustomButton(
                class="mr-2 mt-3 primary--text"
                small
                outlined
                @click="openLink(subsection.program)"
                v-if="!!subsection.program"
            )
                span Zobacz program
            CustomButton(
                @click="openLink(subsection.link)"
                class="mr-2 mt-3"
                small
            )
                span Przejdź do Teams
                v-icon(
                    size="15"
                    class="ml-1"
                ) mdi-arrow-right
</template>

<script>
export default {
    props: {
        section: {
            type: Object,
            required: true
        }
    },
    computed: {
        subsectionsWithoutMainOnes() {
            return this.section.subsections.filter((a) => !a.main)
        },
        mainSubsections() {
            return this.section.subsections.filter((a) => !!a.main)
        }
    }
}
</script>

