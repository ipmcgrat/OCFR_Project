var certDetailApp = new Vue({
  el: '#certDetailApp',
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
      .then(json => { certDetailApp.details = json })

this.handleReset();
    },

    handleReset() {
      this.recordDetails = {
        certid: '',
        certname: '',
        radionumber: '',
        firstname:'',
        lastname: '',
        expyears: ''
      }

    },

},

  created() {
    this.handleReset();
    this.fetchDetails();
  }
});
