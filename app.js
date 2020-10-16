new Vue({
  el: '#vue-app',
  data: {
    name: "Rangga",
    lastName: "Tri Wibowo"
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name
    }
  }
});