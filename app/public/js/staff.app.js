var staffRecordsApp = new Vue({
  el: '#staffRecordsApp',
  data: {
    staff: [],
    recordStaff: {},

  },
  methods: {
    fetchStaff() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { staffRecordsApp.staff = json })
    },
    handleSubmit(event) {
      fetch('api/records/post.php', {
        method: 'POST',
        body: JSON.stringify(this.recordStaff),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {staffRecordsApp.staff.push(json[0])})
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });

      this.handleReset();
    },
    handleReset() {
      this.recordStaff = {
        radionumber: '',
        firstname: '',
        lastname: '',
        station: '',
        phone: ''
      }
    },

  }, // end methods
  created() {
    this.handleReset();
    this.fetchStaff();
  }
});
