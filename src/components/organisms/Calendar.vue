<template lang="pug">
div(class="event-calendar")
    slot
    div(
        class="d-flex justify-space-between mb-5"
        v-if="phablet"
    )
        CustomButton(
            @click="$refs.calendar.prev()"
            outlined
            class="primary--text"
        )
            v-icon mdi-chevron-left
            span(
                v-if="!phone"
            ) Poprzedni
        CustomButton(
            @click="setTodayInCalendar"
            outlined
            :class="isCalendarToday ? 'primary white--text' : 'primary--text'"
        ) Dzisiaj
        CustomButton(
            @click="$refs.calendar.next()"
            outlined
            class="primary--text"
        )
            span(
                v-if="!phone"
            ) Następny
            v-icon mdi-chevron-right
    v-calendar(
        ref="calendar"
        v-model="calendarValue"
        :type="phablet ? 'day' : 'custom-daily'"
        start="2021-09-02"
        end="2021-09-06"
        first-interval="9"
        interval-count="12"
        :events="formattedWebinars"
        event-overlap-mode="column"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        interval-height="60px"
        @click:event="showEvent"
        locale="pl"
    )
    v-menu(
        v-model="selectedOpen"
        :close-on-content-click="false"
        :activator="selectedElement"
        top
        :max-width="phone ? '90%' : '420px'"
    )
        v-card(
            color="white"
            width="100%"
            flat
            class="px-6 py-6"
            style="position: relative"
        )
            div(
                class="secondary--text small mb-1"
                v-html="selectedEvent.recipient"
            )
            div(
                class="mb-1"
                style="width: 90%; font-weight: 600"
                v-html="selectedEvent.title"
            )
            v-divider(class="mt-3 mb-3")
            div {{ getPLDateAndTimeFromSelectedEvent(selectedEvent) }}
            div(
                v-html="selectedEvent.desc2"
                class="small mt-2"
            )

            div(class="d-flex align-center justify-space-between")
                CustomButton(
                    to="/live"
                    small
                    class="mt-4 px-6 mr-2"
                    v-if="selectedEvent.active"
                ) Przejdź do strony transmisji

                CustomButton(
                    @click="signUpToWorkshops"
                    small
                    class="mt-4 px-6"
                    v-if="selectedEvent.workshops"
                    color="primary"
                ) Zapisz się

            //- h5(
            //-     v-if="selectedEvent.workshops"
            //-     class="mb-0 mt-2"
            //-     style="font-weight: 400"
            //- ) Komunikat dotyczący warsztatów

            //- v-btn(
            //-     text
            //-     class="close-button px-1"
            //-     @click="selectedOpen = false"
            //-     depressed
            //- )
            div(class="close-button px-2")
                v-icon(
                    @click="selectedOpen = false"
                ) mdi-close
</template>
<script>
import { mapGetters } from "vuex"
import moment from "moment-timezone"

export default {
    data: () => ({
        calendarValue: "",
        selectedOpen: false,
        selectedElement: null,
        selectedEvent: {},
        todayDate: null
    }),

    computed: {
        ...mapGetters("eventData", ["getLiveTransmissions"]),
        isCalendarToday() {
            if (this.calendarValue == this.todayDate) {
                return true
            } else return false
        },
        formattedWebinars() {
            let copy = JSON.parse(JSON.stringify(this.getLiveTransmissions))
            return copy.map((a) => {
                a.start = moment(parseInt(a.startDisplay), "x").format(
                    "YYYY-MM-DD HH:mm"
                )
                a.end = moment(parseInt(a.endDisplay), "x").format(
                    "YYYY-MM-DD HH:mm"
                )
                a.name = a.title.replace(/<[^>]+>/g, "")
                return a
            })
        }
    },

    methods: {
        showEvent({ nativeEvent, event }) {
            const open = () => {
                this.selectedEvent = event
                this.selectedElement = nativeEvent.target
                setTimeout(() => {
                    this.selectedOpen = true
                }, 10)
            }

            if (this.selectedOpen) {
                this.selectedOpen = false
                setTimeout(open, 10)
            } else {
                open()
            }

            nativeEvent.stopPropagation()
        },
        getEventColor(event) {
            if (!!event.workshops) return "var(--v-secondary-base)"
            else return "var(--v-custom-purple-base)"
        },
        setTodayDate() {
            this.todayDate = new moment().format("YYYY-MM-DD")
        },
        setTodayInCalendar() {
            this.calendarValue = this.todayDate
        },
        getPLDateAndTimeFromSelectedEvent(selectedEvent) {
            let str =
                moment(selectedEvent.startDisplay, "x").format("HH:mm") +
                " - " +
                moment(selectedEvent.endDisplay, "x").format(
                    "HH:mm, DD/MM/YYYY"
                )

            // let str =
            //     moment(selectedEvent.start, 'YYYY-MM-DD HH:mm').format(
            //         'DD/MM/YYYY, HH:mm'
            //     ) +
            //     ' - ' +
            //     moment(selectedEvent.end, 'YYYY-MM-DD HH:mm').format('HH:mm')
            return str
        }
    },

    mounted() {
        this.setTodayDate()
        this.setTodayInCalendar()
    }
}
</script>

<style lang="sass">
.close-button
    position: absolute
    right: 0
    top: 5px
.v-calendar .v-event-timed-container
    margin-right: 0 !important
</style>