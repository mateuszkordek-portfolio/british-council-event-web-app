<template lang="pug">
    div(
        class="timer d-flex align-center justify-center relative"
        v-if="!timerDisabled"
    )
        div(
            class="timer-content d-flex align-center radius px-3 pt-7 pb-5 z-index-1"
        )
            div(
                class="timer-section"
            )
                div(
                    class="value border"
                ) {{timer.days}}
                div(
                    class="label"
                ) Dni
            div(
                class="timer-section"
            )
                div(
                    class="value border"
                ) {{timer.hours}}
                div(
                    class="label"
                ) Godzin
            div(
                class="timer-section"
            )
                div(
                    class="value border"
                ) {{timer.minutes}}
                div(
                    class="label"
                ) Minut
            div(
                class="timer-section"
            )
                div(
                    class="value"
                ) {{timer.seconds}}
                div(
                    class="label"
                ) Sekund


</template>

<script>
import moment from 'moment-timezone';
export default {
    data: () => ({
        timer: {
            days: null,
            hours: null,
            minutes: null,
            seconds: null,
        },
        timerDisabled: false,

        // UTC Thu May 06 2021 06:30:00
        // local Thu May 06 2021 08:30:00
        eventTimestamp: 1620282600000,
    }),

    methods: {
        setTimer() {
            const now = moment().valueOf();
            const difference = moment.duration(
                this.eventTimestamp - now,
                'milliseconds'
            );

            if (difference >= 0) {
                const newTimerObject = {
                    days: Math.floor(difference.asDays()),
                    hours: difference.hours(),
                    minutes: difference.minutes(),
                    seconds: difference.seconds(),
                };

                this.timer = newTimerObject;
            } else {
                this.timer = {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                };
                this.timerDisabled = true;
            }
        },
    },

    created() {
        this.setTimer();
        if (!this.timerDisabled) setInterval(this.setTimer, 1000);
    },
};
</script>

<style lang="sass" scoped>
.timer
    // max-width: 650px
    // width: 110%
    width: 100%
    .timer-content
        background: #282828
        color: white
        // border: 1px solid lightgrey !important
        width: 100%
        overflow: visible
        .timer-section
            display: flex
            flex-direction: column
            align-items: center
            // padding: 5px 10px
            // color: #19191B
            // width: 100px
            flex: 1
            .value
                display: flex
                justify-content: center
                font-weight: 700
                font-size: 25px
                line-height: 20px
                margin-bottom: 15px
                width: 100%
                &.border
                    border-right: 1px solid lightgrey
            .label
                font-weight: 500
</style>
