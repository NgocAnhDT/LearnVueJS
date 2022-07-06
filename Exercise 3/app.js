const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      num: 0,
      name: '',
    };
  },
  methods: {
    setNum(event) {
      this.num = event.target.value;
    },
    setName(event) {
      this.name = event.target.value;
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
