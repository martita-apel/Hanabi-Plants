<template>
  <v-layout id="layout" column justify-center align-center>
    <v-row justify="center">
      <v-dialog :value="modal" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="my-10 text-center"
            large
            outlined
            rounded
            v-bind="attrs"
            v-on="on"
            color="white"
            @click="showModal"
            >Registra tu planta</v-btn
          >
        </template>

        <v-card class="rounded-xl">
          <v-card-title class="d-block">
            <h6 id="header" class="text-center my-3">
              INVENTARIO
            </h6>
            <h1 class="text--secondary text-center titulo">
              Hanabi Plantas
            </h1>
          </v-card-title>

          <v-divider class="my-2 mx-10"></v-divider>

          <v-card-text class="pb-0">
            <v-container class="pb-0">
              <v-row>
                <v-col cols="12" sm="6" class="py-0">
                  <v-text-field
                    type="text"
                    placeholder="Nombre de tu planta*"
                    :value="currentPlant.data.name"
                    @input="updateName"
                    outlined
                    dense
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" class="py-0">
                  <v-text-field
                    type="text"
                    placeholder="Categoría*"
                    hint="Según su especie, tamaño y/o morfología."
                    :value="currentPlant.data.category"
                    @input="updateCategory"
                    outlined
                    dense
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" class="py-0">
                  <v-text-field
                    type="text"
                    placeholder="Imagen*"
                    :value="currentPlant.data.image"
                    @input="updateImage"
                    hint="Ingresa la URL"
                    outlined
                    dense
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" class="py-0">
                  <v-textarea
                    class="pb-0"
                    type="text"
                    placeholder="Descripción"
                    :value="currentPlant.data.description"
                    @input="updateDescription"
                    rows="5"
                    outlined
                    dense
                  ></v-textarea>
                </v-col>

                <div>
                  <v-col cols="12" sm="10" class="py-0">
                    <v-text-field
                      prepend-inner-icon="mdi-currency-usd"
                      placeholder="Precio"
                      :value="currentPlant.data.price"
                      @input="updatePrice"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="8" class="py-0">
                    <v-text-field
                      placeholder="Stock"
                      :value="currentPlant.data.sock"
                      @input="updateStock"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <small class="py-0 my-0 ml-4">*Campos requeridos</small>
                </div>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions class="pb-8 ml-7">
            <v-btn dark color="green darken-1" @click="agregarPlanta">{{
              !!currentPlant.id ? "Actualizar planta" : "Registrar planta"
            }}</v-btn>
            <v-btn outlined color="green darken-1" @click="hideModal"
              >Cerrar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <!-- <v-card-actions class="añadir">
            <v-spacer></v-spacer>
            <v-btn class="primary boton-add" text @click="ocultarModal"
              >CERRAR</v-btn
            >
            <v-btn class="warning boton-add" text @click="agregarToy">{{
              !!currentToy.id ? "Actualizar" : "Añadir"
            }}</v-btn>
                        <v-btn class="green boton-add" text v-if="edit" @click="actualizar(id)">ACTUALIZAR</v-btn>
           
          </v-card-actions> -->
  </v-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {};
  },
  computed: {
    ...mapState(["currentUser", "currentPlant", "modal"]),
  },
  methods: {
    ...mapActions([
      "addPlant",
      "showModal",
      "hideModal",
      "updateName",
      "updateCategory",
      "updateDescription",
      "updateImage",
      "updatePrice",
      "updateStock",
      "updatePlant",
    ]),
    agregarPlanta() {
      if (!this.currentPlant.id) {
        this.addPlant();
      } else {
        this.updatePlant(this.currentPlant.id);
      }
      this.hideModal();
    },
  },

  /* created() {
    this.getToys();
  },  */
};
</script>

<style scoped>
.añadir {
  margin: 0 auto;
}
.boton-add {
  margin-right: 10px;
  color: white !important;
}
#header {
  font-size: 15px;
  letter-spacing: 2px;
  color: grey;
}
.titulo {
  font-family: "PT Serif", serif !important;
  margin: auto 0;
  padding-bottom: 8px;
}
.bajada {
  font-family: "PT Serif", serif;
  font-weight: 400;
}
</style>
