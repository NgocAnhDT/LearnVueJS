const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      num: 0,
    };
  },
  methods: {
    setNum(event) {
      this.num = event.target.value;
    },
    add(num) {
      this.counter = this.counter + Number(num);
    },
    reduce(num) {
      this.counter = this.counter - Number(num);
    }
  },
});

app.mount('#events');
