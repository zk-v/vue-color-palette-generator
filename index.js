import './style';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue'

new Vue({
  el: '#app',
  data: {
    display: false,
    red: 0,
    green: 0,
    blue: 0,
    colors: [],
  },
  methods: {
    generateColors() {
      this.display = true;

      if(this.colors.length != 0) {
        this.colors.splice(0, );
      }

      for(let i = 0; i < 4; i++) {
        this.red = Math.floor(Math.random()*256);
        this.green = Math.floor(Math.random()*256);
        this.blue = Math.floor(Math.random()*256);
        this.colors.push(`rgba(${this.red},${this.green},${this.blue})`);
      }
      
      
    }
  }
});

