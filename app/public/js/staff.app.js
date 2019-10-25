var staffRecordsApp = new Vue({
  el: '#staffRecordsApp',
  data: {
    staff: [],
    recordStaff: {},
    filter: {
      lastname:''
    }

  },
  methods: {
    fetchStaff() {
      fetch('api/records/index.php')
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

    handleDelete(sid) {
      fetch('api/records/staffdelete.php',{
        method: 'POST',
        body: JSON.stringify({"radionumber":sid}),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then(function(response){
        staffRecordsApp.staff = staffRecordsApp.staff.filter(
          function(el) {return el.radionumber != sid}
        );
      })
        .catch( err =>{
          console.error('STAFF DELETE ERROR: ');
          console.error(err);
        });
this.handleReset();
},
  }, // end methods
  created() {
    this.handleReset();
    this.fetchStaff();
  }
});
