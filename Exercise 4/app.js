const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: '',
    };
  },
  watch: {
    // name(value) {
    //   if (value === '') {
    //         this.fullname = '';
    //     }
    //   this.fullname = value + ' ' + this.lastName;
    // },
    // lastName(value) {
    //   if (value === '') {
    //         this.fullname = '';
    //     }
    //   this.fullname = this.name + ' ' + value;
    // }
  },
  computed: {
    fullname() {
      console.log('Running again...')
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    // outputFullname() {
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + 'Schwarzmüller';
    // },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    }
  }
});

app.mount('#events');
