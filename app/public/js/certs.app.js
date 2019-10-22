var certsRecordsApp = new Vue({
  el: '#certsRecordsApp',
  data: {
    certifications: [],
      recordCert: {},
  },
  methods: {
    fetchCerts() {
      fetch('api/records/')
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
      .then( json => {certsRecordsApp.staff.push(json[0])})
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });

      this.handleReset();
    },
    handleReset() {
      this.recordCert = {
        certid: '',
        certname: '',
        agency: '',
        expyears: ''
      },
      handleRowCLick(row) {

      }
    },

  }, // end methods
  created() {
    this.handleReset();
    this.fetchCerts();
  }
});
