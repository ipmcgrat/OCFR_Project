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
