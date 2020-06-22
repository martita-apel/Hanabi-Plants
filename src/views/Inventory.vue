<template>
  <div class="inventory">
    <h1 id="inventory_titulo">
      Próximamente
    </h1>
    <v-divider class="div mt-6" color="white"></v-divider>
  </div>
</template>

<script>
export default {
  name: "Inventory",

  data() {
    return {};
  },
};
</script>

<style scoped>
.inventory {
  background-color: #00733f;
}

#inventory_titulo {
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
@media only screen and (max-width: 700px) {
  #inventory_titulo {
    font-size: 3rem;
  }
}
@media only screen and (max-width: 500px) {
  #inventory_titulo {
    font-size: 2rem;
  }
}
</style>
