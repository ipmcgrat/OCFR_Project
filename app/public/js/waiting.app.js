var waitingApp = new Vue({
  el: '#staffWaitingApp',
  data: {
    staff: [],

  },
  methods: {
    fetchStaff() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { waitingApp.staff = json })
    }
  }, // end methods
  created() {
    this.handleReset();
  }
});
