<template lang="pug">
    div(
        style="display: grid"
        :style="{'grid-template-columns': computedCols, 'grid-gap': computedGap, 'direction': computedColumn, 'text-align': computedText}"
    )
        slot

</template>

<script>
const notLess = (val, min = 1) => {
    if (val < min) return min
    else return val
}

export default {
    props: {
        cols: {
            type: Array,
            default: [4, 3, 2, 1],
        },
        gap: {
            type: Number | String,
            default: 20,
        },
        gapX: {
            type: Number | String,
            default: 0,
        },
        gapY: {
            type: Number | String,
            default: 0,
        },
        reverse: Boolean,
    },

    computed: {
        computedCols() {
            let populate = (obj) => {
                let out = ''
                if (typeof obj == 'number') {
                    for (let i = 0; i < obj; i++) {
                        out = out + '1fr '
                    }
                } else {
                    for (let i of obj) {
                        if (typeof i != 'number') out = out + i + ' '
                        else out = out + i + 'fr '
                    }
                }
                return out
            }
            if (this.cols.length == 1) return populate(this.cols[0])
            if (this.phone) return populate(this.cols[3])
            if (this.phablet) return populate(this.cols[2])
            if (this.desktop) return populate(this.cols[1])
            return populate(this.cols[0])
        },

        computedColumn() {
            if (this.reverse) {
                return 'rtl'
            }
        },

        computedGap() {
            let out = [this.gap, this.gap]
            if (this.gapX) out[0] = this.gapX
            if (this.gapY) out[1] = this.gapY
            return out[0] + 'px ' + out[1] + 'px'
        },

        computedText() {
            if (this.reverse) {
                return 'left'
            }
        },
    },
}
</script>
