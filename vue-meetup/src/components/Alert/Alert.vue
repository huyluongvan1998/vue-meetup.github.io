<template>
  <div>
    <v-alert
      dense
      outlined
      dismissible
      transition="fade-transition"
      :type="error.type"
      :icon="icon"
      v-if="error.isDisplay"
    >
      {{ error.msg }}
    </v-alert>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Alert",
  props: ["msg", "type", "icon"],
  computed: {
    ...mapState(["error"]),
  },
  watch: {
    error: {
      handler() {
        setInterval(() => (this.error.isDisplay = false), 4000);
      },
    },
  },
};
</script>
