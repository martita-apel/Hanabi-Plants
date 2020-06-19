<template>
  <div>
    <v-row cols="12">
      <v-col sm="4" class="pa-0">
        <img class="post_image" src="../assets/post-2.png" alt="" />
      </v-col>
      <v-col sm="4" class="pa-0">
        <img class="post_image" src="../assets/post-3.png" alt="" />
      </v-col>
      <v-col sm="4" class="pa-0">
        <img class="post_image" src="../assets/post-1.png" alt="" />
      </v-col>
    </v-row>
    <div class="post_cuerpo">
      <img class="post_iconos" src="../assets/iconos-post.png" alt="iconos" />
      <h3>
        Cuidando nuestras <br />
        plantas en invierno
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vel
        adipisci eaque veritatis fuga porro nesciunt vitae vero error natus
        laudantium delectus, qui architecto provident explicabo ducimus eos
        blanditiis in? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Temporibus iusto velit vero aliquam tenetur et aperiam qui id repellat
        facere? Sit, deleniti recusandae labore reiciendis neque quisquam minima
        sequi a.
      </p>
      <v-divider class="div my-6 mx-auto"></v-divider>

      <v-row cols="12">
        <v-card class="mx-auto" color="#D3CABE" dark max-width="400">
          <v-card-title class="overline text-center mb-4" justify="center"
            >1</v-card-title
          >

          <v-card-text class="headline font-weight-bold">
            "Turns out semicolon-less style is easier and safer in TS because
            most gotcha edge cases are type invalid as well."
          </v-card-text>

          <v-card-actions>
            <v-icon large left>mdi-twitter</v-icon>
            <span class="title font-weight-light">Twitter</span>
          </v-card-actions>
        </v-card>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostArticle",
};
</script>

<style scoped>
.post_image {
  max-width: 100%;
}
.post_cuerpo {
  font-family: "PT Serif", serif;
  text-align: center;
  padding: 20px;
}
.post_iconos {
  max-width: 200px;
}
h3 {
  font-size: 2.5rem;
  line-height: 40px;
}
p {
  font-size: 1rem;
  max-width: 70%;
  margin: 20px auto;
}
.div {
  max-width: 300px;
}
</style>
