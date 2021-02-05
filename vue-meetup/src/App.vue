<template>
  <v-app>
    <Header />
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import { mapActions } from "vuex";
export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({}),
  methods: {
    ...mapActions(["loadMeetUps"]),
  },
  mounted() {
    this.meetUps = this.loadMeetUps();
  },
};
</script>

<style>
input[type="password"] {
  letter-spacing: 0.3em;
}
</style>
