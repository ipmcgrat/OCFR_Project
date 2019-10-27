var certsRecordsApp = new Vue({
  el: '#certsRecordsApp',
  data: {
    certifications: [],
      editCert: {},
      recordCert: {},

      filter1: {
        cname:''
      }
  },
  methods: {
    fetchCerts() {
      fetch('api/records/certindex.php')
      .then(response => response.json())
      .then(json => { certsRecordsApp.certifications = json })
    },
    handleSubmit(event) {
      fetch('api/records/certpost.php', {
        method: 'POST',
        body: JSON.stringify(this.recordCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {certsRecordsApp.certifications.push(json[0])})
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      })

    },

    handleEdit(event) {
      fetch('api/records/editcert.php', {
        method: 'POST',
        body: JSON.stringify(this.editCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      this.fetchCerts();

      this.handleReset();
    },

    handleReset() {
      this.recordCert = {
        certid: '',
        certname: '',
        agency: '',
        expyears: ''
      }
    },


    handleDelete(cid) {
      fetch('api/records/certdelete.php',{
        method: 'POST',
        body: JSON.stringify({"certid":cid}),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then(function(response){
        certsRecordsApp.certifications = certsRecordsApp.certifications.filter(
          function(el) {return el.certid != cid}
        );
      })
        .catch( err =>{
          console.error('CERTIFICATIONS DELETE ERROR: ');
          console.error(err);
        });

        this.handleReset();
      },

      handleRowClick(editCert){
        certsRecordsApp.editCert = editCert;
      }

  }, // end methods
  created() {
    this.handleReset();
    this.fetchCerts();
  }
});
