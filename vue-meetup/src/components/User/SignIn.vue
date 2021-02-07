<template>
  <v-container>
    <Alert :type="'error'" :msg="error.msg" />
    <v-form ref="form" v-model="valid" lazy-validation v-on:keyup:enter="onSubmitHandler">
      <v-text-field
        v-model="formData.email"
        :counter="50"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="formData.password"
        :rules="formData.passwordRules"
        label="Password"
        type="password"
        required
      ></v-text-field>

      <v-btn color="success" class="mr-4" @click="onSubmitHandler">
        Submit
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Alert from "../Alert/Alert";

export default {
  components: {
    Alert,
  },
  data: () => ({
    invalid: false,
    valid: true,
    name: "",
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    checkbox: false,
    formData: {
      email: "",
      password: "",
    },
  }),
  computed: {
    ...mapState(["user", "error"]),
  },
  methods: {
    ...mapActions(["signInUser"]),
    onSubmitHandler() {
      const { email, password } = this.formData;
      this.signInUser({ email, password });
    },
  },
  watch: {
    user: {
      handler() {
        this.$router.push("/");
      },
    },
  },
};
</script>
