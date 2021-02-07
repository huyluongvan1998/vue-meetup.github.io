<template>
  <div></div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["signOutUser"]),
  },
  created() {
    this.signOutUser();
    this.$router.push("/");
  },
};
</script>
