const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn VueJs',
            vueLink: 'http://vuejs.org/',
            resultRandom: undefined
        };
    },
    methods:{
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Master Vue';
            }
        },
        randomNum() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                this.resultRandom = `[${randomNumber.toFixed(2)}] Learn Vuejs`;
            } else {
                this.resultRandom = `[${randomNumber.toFixed(2)}] Learn PHP`
            }
        }

    }
});

app.mount('#user-goal');