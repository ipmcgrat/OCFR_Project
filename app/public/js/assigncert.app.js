var assignCertApp = new Vue({
  el: '#assignCertApp',
  data: {
    assign: [],
      recordDetails: {}
  },
  methods: {
    fetchDetails() {
      fetch('api/records/assigncert.php')
      .then(response => response.json())
      .then(json => { detailRecordsApp.assign = json })

this.handleReset();
    },

    handleReset() {
      this.recordDetails = {
        radionumber: '',
        firstname: '',
        lastname: '',
        certid:'',
        certname: '',
        expyears: ''
      }

    },

},

  created() {
    this.handleReset();
    this.fetchDetails();
  }
});
