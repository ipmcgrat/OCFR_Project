var staffUpdateApp = new Vue({
  el: '#staffRecordsApp',
  data: {
    staff: [],
    recordStaff: {},
    editStaff: {},
    filter: {
      lname:''
    }

  },
  methods: {
    fetchStaff() {
      fetch('api/records/index.php')
      .then(response => response.json())
      .then(json => { staffRecordsApp.staff = json })
    },

    handleUpdate(sid) {
      fetch('api/records/editstaff.php', {
        method: 'POST',
        body: JSON.stringify(this.editStaff),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

    this.fetchStaff();
    this.handleReset();
  },

    handleReset() {
      this.recordStaff = {
        radionumber: '',
        firstname: '',
        lastname: '',
        station: '',
        phone: '',
        email: ''
      }
    },
  }, // end methods
  created() {
    this.handleReset();
    this.fetchStaff();
  }
});
