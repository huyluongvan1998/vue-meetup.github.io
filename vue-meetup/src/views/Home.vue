<template>
  <v-container>
    <Alert />

    <div align="center" class="my-2">
      <router-link to="/create-meetup" class="text-decoration-none">
        <v-btn depressed large dark class="mx-1"> Explore Meet Up </v-btn>
      </router-link>
      <router-link to="/create-meetup" class="text-decoration-none">
        <v-btn depressed large dark class="mx-1"> Create a MeetUp </v-btn>
      </router-link>
    </div>

    <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, idx) in items"
        :key="idx"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
// import { mapState } from 'vuex';
// @ is an alias to /src
import Alert from "../components/Alert/Alert";
export default {
  name: "Home",
  components: {
    Alert,
  },
  data() {
    return {
      items: [
        {
          src: require("@/assets/phoenix_1.jpg"),
        },
        {
          src: require("@/assets/phoenix_2.jpg"),
        },
        {
          src: require("@/assets/phoenix_3.jpg"),
        },
        {
          src: require("@/assets/phoenix_4.jpg"),
        },
      ],
    };
  },
};
</script>
