import Vue from 'vue'

const breakpoints = {
    computed: {
        // breakpoints only

        ultraOnly() {
            return this.$vuetify.breakpoint.xl;
        },

        desktopOnly() {
            return this.$vuetify.breakpoint.lg;
        },

        laptopOnly() {
            return this.$vuetify.breakpoint.md;
        },

        phabletOnly() {
            return this.$vuetify.breakpoint.sm;
        },

        phoneOnly() {
            return this.$vuetify.breakpoint.xs;
        },

        // breakpoints and down

        desktop() {
            return this.$vuetify.breakpoint.lg || this.laptop;
        },

        laptop() {
            return this.$vuetify.breakpoint.md || this.phablet;
        },

        phablet() {
            return this.$vuetify.breakpoint.sm || this.phone;
        },

        phone() {
            return this.$vuetify.breakpoint.xs;
        }
    }
}


Vue.mixin(breakpoints)