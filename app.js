new Vue({
  el: '#vue-app',
  data: {
    name: "Rangga",
    lastName: "Tri Wibowo",
    website: 'https://www.google.com',
    websitesTags: '<a href="https://www.google.com">Gooo Google</a>'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name
    }
  }
});