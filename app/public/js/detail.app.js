var detailRecordsApp = new Vue({
  el: '#detailRecordsApp',
  data: {
    details: [],
      recordDetails: {},

      filter: {
        lname:''
      }

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
        status: ''
      }

    },

},

  created() {
    this.handleReset();
    this.fetchDetails();
  }
});
