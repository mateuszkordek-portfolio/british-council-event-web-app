import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import pl from 'vuetify/lib/locale/pl';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#23085A', // granatowy
                secondary: '#ff00c8', // rozowy
                accent: "FF8200", // pomaranczowy
                'custom-blue': '#00C7F5',
                'custom-green': '#035C67',
                'custom-purple': '#B25EFF',
                'custom-grey': '#f5f5f5', // szary
                'almost-black': '#4C5562', // uzywany do jasniejszych tekstow
                'default-black': '#1a1a1a',
                'always-black': '#1a1a1a',
                white: '#fff',
                info: '#2196F3',
                warning: '#FFC107',
                error: '#FF5252',
                success: '#4CAF50',
            },
        },
    },
    lang: {
        locales: { pl },
        current: 'pl',
    },
    icons: {
        iconfont: 'mdi',
    },
});
