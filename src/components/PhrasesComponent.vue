<template>
  <div class="phrases">
    <p id="phrase">
      {{ phrase }}
    </p>
    <p id="author">
      {{ author }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PhrasesComponent',
  props: {
    phrase: String,
    author: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#phrase {
  font-size: xxx-large;
  font-weight: bold;
  margin: 23% 15% 0px 15%;
}

#author {
  font-size: xxx-large;
  font-weight: lighter;
  text-align: end;
  margin: 50px 15%;
}

</style>
