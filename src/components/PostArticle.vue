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

      <v-row cols="12" class="ma-4">
        <v-col sm="4">
          <v-card class="mx-auto" color="#D3CABE" dark max-width="400">
            <v-btn small color="white" class="pl-1 mt-6 mx-auto" outlined fab>
              <v-text class="card_title overline">1</v-text>
            </v-btn>

            <v-card-text class="headline font-weight-bold">
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well."
            </v-card-text>

            <v-btn
              class="card_boton text--secondary mb-5 pa-2"
              x-small
              color="white"
              light
              >guiaverde</v-btn
            >
          </v-card>
        </v-col>

        <v-col sm="4">
          <v-card class="mx-auto" color="#D3CABE" dark max-width="400">
            <v-btn small color="white" class=" mt-6 mx-auto" outlined fab>
              <v-text class="card_title overline">2</v-text>
            </v-btn>

            <v-card-text class="headline font-weight-bold">
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well."
            </v-card-text>

            <v-btn
              class="card_boton text--secondary mb-5 pa-2"
              x-small
              color="white"
              light
              >camelia</v-btn
            >
          </v-card>
        </v-col>

        <v-col sm="4">
          <v-card class="mx-auto" color="#D3CABE" dark max-width="400">
            <v-btn small color="white" class=" mt-6 mx-auto" outlined fab>
              <v-text class="card_title overline">3</v-text>
            </v-btn>

            <v-card-text class="headline font-weight-bold">
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well."
            </v-card-text>

            <v-btn
              class="card_boton text--secondary mb-5 pa-2"
              x-small
              color="white"
              light
              >plantme</v-btn
            >
          </v-card>
        </v-col>
      </v-row>

      <v-row cols="12" class="ma-4">
        <v-col sm="4">
          <v-card class="mx-auto" color="#D3CABE" dark max-width="400">
            <v-btn small color="white" class="pl-1 mt-6 mx-auto" outlined fab>
              <v-text class="card_title overline">4</v-text>
            </v-btn>

            <v-card-text class="headline font-weight-bold">
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well."
            </v-card-text>

            <v-btn
              class="card_boton text--secondary mb-5 pa-2"
              x-small
              color="white"
              light
              >garden</v-btn
            >
          </v-card>
        </v-col>

        <v-col sm="4">
          <v-card class="mx-auto" color="#D3CABE" dark max-width="400">
            <v-btn small color="white" class=" mt-6 mx-auto" outlined fab>
              <v-text class="card_title overline">5</v-text>
            </v-btn>

            <v-card-text class="headline font-weight-bold">
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well."
            </v-card-text>

            <v-btn
              class="card_boton text--secondary mb-5 pa-2"
              x-small
              color="white"
              light
              >ecoplants</v-btn
            >
          </v-card>
        </v-col>

        <v-col sm="4">
          <v-card class="mx-auto" color="#D3CABE" dark max-width="400">
            <v-btn small color="white" class=" mt-6 mx-auto" outlined fab>
              <v-text class="card_title overline">6</v-text>
            </v-btn>

            <v-card-text class="headline font-weight-bold">
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well."
            </v-card-text>

            <v-btn
              class="card_boton text--secondary mb-5 pa-2"
              x-small
              color="white"
              light
              >monrovia</v-btn
            >
          </v-card>
        </v-col>
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

.card_title {
  font-size: 20px !important;
  text-align: center;
}
.card_boton {
  font-family: "Roboto";
}
</style>
