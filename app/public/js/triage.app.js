var staffUpdateApp = new Vue({
  el: '#staffUpdateApp',
  data: {
    staff: [],
    recordStaff: {},
    editStaff: {},

  },
  methods: {
    handleSubmit(event) {
      fetch('api/records/post.php', {
        method: 'POST',
        body: JSON.stringify(this.staff),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {waitingApp.staff.push(json[0])})
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });

    },

    handleReset() {
      this.staff = {
        radionumber: '',
        firstname: '',
        lastname: '',
        station: '',
        phone: '',
        email: ''
      }
    }
  }, // end methods
  created() {
    this.handleReset();
  }
});
