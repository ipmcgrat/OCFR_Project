var certStatusApp = new Vue({
  el: '#certStatusApp',
  data: {
    details: [],
      recordDetails: {},


            filter1: {
              cname:''
            }

  },
  methods: {
    fetchDetails() {
      fetch('api/records/certstatus.php')
      .then(response => response.json())
      .then(json => { certStatusApp.details = json })

this.handleReset();
    },

    handleReset() {
      this.recordDetails = {
        radionumber: '',
        firstname: '',
        lastname: '',
        certname:'',
        status:''
      }

    },

},

  created() {
    this.handleReset();
    this.fetchDetails();
  }
});
