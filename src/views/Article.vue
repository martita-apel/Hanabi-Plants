<template>
  <div>
    <div class="article">
      <img class="article_image" src="../assets/article.jpg" alt="Article" />
      <div class="article_cuerpo">
        <h1>
          Nuestras <br />
          Plantas de Interior
        </h1>
        <h2><i>¿Cómo cuidarlas?</i></h2>
        <v-divider class="my-4" color="white"></v-divider>
        <p class="article_parrafo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          laudantium consectetur ut obcaecati. Eos eius alias expedita,
          architecto autem iste et? Quod rerum similique facere dolor, non
          voluptate culpa inventore. Quod rerum similique facere dolor, non
          voluptate culpa inventore.
        </p>
        <router-link :to="{ name: 'PostArticle' }" id="leer_mas"
          ><v-btn class="my-4" outlined color="white"
            ><i>Leer más</i></v-btn
          ></router-link
        >
      </div>
    </div>
    <v-main class="article_post">
      <router-view />
    </v-main>
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

<style>
.article {
  background-color: #cdbfb4;
  display: flex;
}
.article_image {
  max-width: 48%;
}
.article_cuerpo {
  font-family: "PT Serif", serif;
  margin: 0 40px;
  text-align: left;
  color: white;
}
h1 {
  font-size: 4.5rem;
  line-height: 70px;
  margin: 100px 0 0 0px;
}
h2 {
  font-size: 2.5rem;
  margin: 0;
}
.article_parrafo {
  font-size: 1.1rem;
}
#leer_mas {
  text-decoration: none;
}
.article_post {
  max-width: 100%;
  display: inline-flex;
}

@media only screen and (max-width: 900px) {
  h1 {
    font-size: 3.8rem;
    line-height: 60px;
    margin: 100px 0 0 0px;
  }
  h2 {
    font-size: 2.2rem;
  }
}
@media only screen and (max-width: 756px) {
  h1 {
    font-size: 2.8rem;
    line-height: 45px;
    margin: 80px 0 0 0px;
  }
  h2 {
    font-size: 1.6rem;
  }
  .article_parrafo {
    font-size: 0.9rem;
  }
}
@media only screen and (max-width: 700px) {
  .article {
    display: block;
  }
  .article_image {
    min-width: 100%;
    object-fit: cover;
    height: 450px;
  }
  h1 {
    margin: 30px 0 0 0px;
  }
  .article_parrafo {
    font-size: 1rem;
  }
}
</style>
