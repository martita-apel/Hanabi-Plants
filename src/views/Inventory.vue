<template>
  <div class="article">
    <h1>
      Próximamente
    </h1>
    <v-divider class="div" color="white"></v-divider>
  </div>
</template>

<script>
export default {
  name: "Article",

  data() {
    return {};
  },
};
</script>

<style scoped>
.article {
  background-color: #00733f;
}

h1 {
  font-family: "PT Serif", serif;
  margin: auto;
  text-align: center;
  color: white;
  font-size: 4.5rem;
  margin-top: 180px;
}
.div {
  max-width: 50%;
  margin: auto;
  margin-bottom: 250px;
}
</style>
