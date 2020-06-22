<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card height="400" color="transparent" flat>
            <div class="display-3 mt-5">Page not found.</div>
            <div class="grey--text lighten-5">
              <br />
              The page you are trying to get to never existed in this reality,
              or has migrated to a parallel universe.
            </div>
            <div class="paragraph-text mt-2">
              Try going back to home page and repeating your action.
            </div>
            <v-btn class="my-6" to="/">Home</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.paragraph-text {
  font-size: 18px;
}
</style>
