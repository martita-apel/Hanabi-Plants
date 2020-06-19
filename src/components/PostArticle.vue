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
              <v-card-text class="card_title overline">1</v-card-text>
            </v-btn>

            <v-card-text class="headline font-weight-bold">
              "La ausencia de luz es una de las razones más habituales por las
              que una planta de interior te mostrará su
              <i>peor cara</i>."
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
              <v-card-text class="card_title overline">2</v-card-text>
            </v-btn>

            <v-card-text class="headline font-weight-bold">
              "El exceso de agua en el riego y la falta de filtración son la
              mayor causa de mortalidad en las plantas."
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
              <v-card-text class="card_title overline">3</v-card-text>
            </v-btn>

            <v-card-text class="headline font-weight-bold">
              "Los cambios bruscos de temperatura o las corrientes de aire son
              un problema habitual para la pérdida de sus hojas."
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

      <v-row cols="12" class="mx-4 mb-8">
        <v-col sm="4">
          <v-card class="mx-auto" color="#D3CABE" dark max-width="400">
            <v-btn small color="white" class="mt-6 mx-auto" outlined fab>
              <v-card-text class="card_title overline">4</v-card-text>
            </v-btn>

            <v-card-text class="headline font-weight-bold">
              "El trasplante es clave para el crecimiento de la planta, no es
              bueno que las raíces se encuentren apretadas."
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
            <v-btn small color="white" class="mt-6 mx-auto" outlined fab>
              <v-card-text class="card_title overline">5</v-card-text>
            </v-btn>

            <v-card-text class="headline font-weight-bold">
              "Durante el período de crecimiento de la planta, es necesario
              abonarla para que no le falten nutrientes."
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
            <v-btn small color="white" class="mt-6 mx-auto" outlined fab>
              <v-card-text class="card_title overline">6</v-card-text>
            </v-btn>

            <v-card-text class="headline font-weight-bold">
              "Las hojas con puntas secas es el síntoma más habitual, pero
              puedes tratar esto pulverizando con agua sus hojas."
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

      <v-divider class="div my-6 mx-auto"></v-divider>
    </div>

    <h4 class="proximo_articulo">PRÓXIMOS ARTÍCULOS</h4>
    <v-row cols="12" class="mx-8 mb-12">
      <v-col sm="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          >
            <v-card-title>Top 10 flores primaverales</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">N. 08</v-card-subtitle>

          <v-card-text class="text--primary pb-0">
            <div>Colección de colores</div>
            <div>Desde Chiloé al Valle de Elqui</div>
          </v-card-text>

          <v-card-actions>
            <v-btn class="ml-auto" color="orange" text>
              Explorar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col sm="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://images.unsplash.com/photo-1505159042738-73dbae90178f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          >
            <v-card-title>Suculentas y su secreto</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">N. 09</v-card-subtitle>

          <v-card-text class="text--primary pb-0">
            <div>Equilibrio de energías</div>
            <div>¿Cómo transmitirlas al ambiente?</div>
          </v-card-text>

          <v-card-actions>
            <v-btn class="ml-auto" color="orange" text>
              Explorar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col sm="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://images.unsplash.com/uploads/1411901100260f56b39b9/ab70b250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          >
            <v-card-title>Invernaderos</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">N. 10</v-card-subtitle>

          <v-card-text class="text--primary pb-0">
            <div>Consejos para cultivar</div>
            <div>Las ventajas para tus cultivos</div>
          </v-card-text>

          <v-card-actions>
            <v-btn class="ml-auto" color="orange" text>
              Explorar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
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
.proximo_articulo {
  font-family: "Roboto";
  font-weight: 400;
  letter-spacing: 3px;
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
  color: grey;
}
</style>
