<template>
  <v-container>
    <v-row>
      <v-col col="12">
        <v-card max-width="80%" class="mx-auto">
          <v-container>
            <v-row dense v-for="meetUp in getMeetUps" :key="meetUp.id">
              <v-col cols="12">
                <v-card dark>
                  <div class="d-flex flex-no-wrap">
                    <v-avatar class="ma-2" size="125" tile>
                      <v-img :src="meetUp.imageUrl"></v-img>
                    </v-avatar>
                    <div class="m-0 float-left">
                      <v-card-title class="headline">{{
                        meetUp.title
                      }}</v-card-title>
                      <v-card-subtitle>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              >Date: {{ meetUp.date }}</v-list-item-title
                            >
                            <v-list-item-subtitle
                              >Time:
                              {{ meetUp.timeHours }}</v-list-item-subtitle
                            >
                            <v-list-item-subtitle
                              >Description:
                              {{ meetUp.description }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-card-subtitle>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["getMeetUps"]),
  },
};
</script>
