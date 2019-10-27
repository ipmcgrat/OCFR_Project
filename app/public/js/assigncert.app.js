var assignCertApp = new Vue({
  el: '#assignCertApp',
  data: {
    assign: [],
      recordDetails: {}
  },
  methods: {
    fetchCert() {
      fetch('api/records/assignindex.php')
      .then(response => response.json())
      .then(json => { assignCertApp.assign = json })
    },
    handleSubmit(event) {
      fetch('api/records/assignpost.php', {
        method: 'POST',
        body: JSON.stringify(this.recordDetails),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {assignCertApp.assign.push(json[0])})
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      })
      this.fetchCert();
      this.handleReset();
    },


    handleReset() {
      this.recordDetails = {
        radionumber: '',
        firstname: '',
        lastname: '',
        certid: '',
        certname: '',
        status: ''
      }
    },

    handleDelete(sid) {
      fetch('api/records/assigndelete.php',{
        method: 'POST',
        body: JSON.stringify({"radionumber":sid}),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then(function(response){
        assignCertApp.assign = assignCertApp.assign.filter(
          function(el) {return el.radionumber != sid}
        );
      })
        .catch( err =>{
          console.error('ASSIGN DELETE ERROR: ');
          console.error(err);
        });

        this.handleReset();
},

handleRowClick(editassigned){
  assignCertApp.editassigned = editassigned;
}

  }, // end methods
  created() {
    this.handleReset();
    this.fetchCert();
  }
});
