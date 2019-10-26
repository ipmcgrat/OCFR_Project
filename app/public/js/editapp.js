var staffEditApp = new Vue({
  el: '#staffEditApp',
  data: {
    staff: {}

  },
  methods: {
    handleSubmit() {
      fetch('api/records/editstaff.php', {
        method: 'POST',
        body: JSON.stringify(this.staff),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {staffEditApp.staff.push(json[0])})
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      })

      this.handleReset();

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
