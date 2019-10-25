var detailRecordsApp = new Vue({
  el: '#detailRecordsApp',
  data: {
    details: [],
      recordDetails: {},
  },
  methods: {
    fetchDetails() {
      fetch('api/records/memcert.php')
      .then(response => response.json())
      .then(json => { detailRecordsApp.details = json })


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
    }

this.handleReset();


  }, // end methods
  created() {
    this.handleReset();
    this.fetchDetails();
  }
});
