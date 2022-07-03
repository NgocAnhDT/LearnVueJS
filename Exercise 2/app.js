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
                this.resultRandom = 'Learn Vuejs';
            } else {
                this.resultRandom = 'Learn PHP';
            }
        }

    }
});

app.mount('#user-goal');