function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100
        };
    },
    methods: {
        attackMonster() {
            if (this.monsterHealth < 6) {
                this.monsterHealth = 0;
            } else {
                const attackValue = getRandomValue(5, 12);
                this.monsterHealth -= attackValue;
                this.attackPlayer();
            }
        },
        attackPlayer() {
            if (this.playerHealth < 9) {
                this.playerHealth = 0;
            } else {
                const attackValue = getRandomValue(8, 15);
                this.playerHealth -= attackValue;
            }
        }
    },
});

app.mount('#game');