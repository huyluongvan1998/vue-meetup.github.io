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
// import { mapActions, mapState } from "vuex";
export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({}),
};
</script>

<style>
input[type="password"] {
  letter-spacing: 0.3em;
}
</style>
