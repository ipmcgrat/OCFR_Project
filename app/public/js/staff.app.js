var staffRecordsApp = new Vue({
  el: '#staffRecordsApp',
  data: {
    staff: [],
    recordStaff: {},
    editStaff: {},
    filter: {
      lname:''
    },
    filter1: {
      sname: ''
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
},

    handleUpdate(sid) {
      fetch('api/records/editstaff.php', {
        method: 'POST',
        body: JSON.stringify({"radionumber":sid}),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then(function(response){
        staffEditApp.staff = staffEditApp.staff.filter(
          function(el) {return el.radionumber != sid}
        );
      })
        .catch( err =>{
          console.error('STAFF DELETE ERROR: ');
          console.error(err);
        });
this.handleReset();
  },

handleRowClick(staff){
  staffRecordsApp.staff = staff;
  console.log(staff);

  this.handleReset();
}

  }, // end methods
  created() {
    this.handleReset();
    this.fetchStaff();
  }
});
