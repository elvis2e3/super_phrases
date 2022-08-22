<template>
  <PhrasesComponent
      :phrase=phrase
      :author=author
  />
</template>

<script>
import PhrasesComponent from './components/PhrasesComponent.vue'
import apiPhrases2e3 from './services/apiPhrases2e3';

export default {
  name: 'App',
  components: {
    PhrasesComponent
  },
  data () {
    this.phrase_list()
    return {
      phrases: {},
      phrase: "",
      author: "",
      index: 0,
      color: "color0",
      index_color: 0,
      colors: [
          "color0",
          "color1",
          "color2",
          "color3",
          "color4",
          "color5",
          "color6",
          "color7",
          "color8",
          "color9",
      ]
    }
  },
  mounted() {
    setInterval(() => this.timer(), 1000 * 10)
  },
  methods: {
    phrase_list() {
      apiPhrases2e3.getList().then(res => {
        this.phrases = res
        this.timer()
      })
    },
    timer(){
      let phrase_aux = this.phrases.items[this.index];
      this.phrase = phrase_aux.phrase
      const el = document.body;
      el.classList.remove(this.color);
      if(phrase_aux.author){
        this.author = "- " + phrase_aux.author + " -"
      }else{
        this.author = ""
      }
      if(this.index < this.phrases.totalItems - 1){
        this.index++;
      }else{
        this.index = 0;
      }
      if(this.index_color < this.colors.length - 1){
        this.index_color++;
      }else{
        this.index_color = 0;
      }
      this.color = this.colors[this.index_color]
      el.classList.add(this.color);
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
body {
  color: #f3f3f3;
}
.color0{
  background: #c0392b;
}
.color1{
  background:  #884ea0 ;
}
.color2{
  background: #2980b9;
}
.color3{
  background:  #3498db;
}
.color4{
  background:  #1abc9c;
}
.color5{
  background:  #f39c12;
}
.color6{
  background:  #f1c40f ;
}
.color7{
  background:  #2ecc71 ;
}
.color8{
  background: #707b7c ;
}
.color9{
  background: #34495e ;
}
</style>
