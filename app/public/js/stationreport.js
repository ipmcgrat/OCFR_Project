var stationReportApp = new Vue({
  el: '#stationReportApp',
  data: {
    details: [],
      recordDetails: {},

      filter1: {
        sname:''
      }

  },
  methods: {
    fetchDetails() {
      fetch('api/records/index.php')
      .then(response => response.json())
      .then(json => { stationReportApp.details = json })

this.handleReset();
    },

    handleReset() {
      this.recordDetails = {
        station: '',
        radionumber: '',
        firstname: '',
        lastname: '',
        email: ''
      }

    },

},

  created() {
    this.handleReset();
    this.fetchDetails();
  }
});
