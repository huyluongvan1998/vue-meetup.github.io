<template>
  <div>
    <v-toolbar
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <router-link class="text-decoration-none"
        to="/"
      >
        <v-toolbar-title>
          <span class="title-meetup">
            Meetup App
          </span> 
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <div v-for="(m, idx) in menu" :key="idx" class="mx-2">
        <router-link
          :to="m.path"
          class="text-decoration-none"
          v-if="m.isSignIn === user.isSignIn || m.isShow"
        >
          <v-btn>
            <i :class="m.icon" aria-hidden="true">
              <span> {{ "  " }} {{ m.content }} </span>
            </i>
          </v-btn>
        </router-link>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState(["menu", "user"]),
  },
};
</script>

<style>
  .title-meetup{
    color: rgba(241, 246, 250);
    font-weight: bold;
  }
</style>
