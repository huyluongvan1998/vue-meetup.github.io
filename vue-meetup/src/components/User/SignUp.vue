<template>
  <v-container>
    <form @submit.prevent="submitHandler">
      <h1>Sign Up</h1>
      <!-- Email -->
      <v-text-field
        v-model="formData.email"
        label="E-mail"
        :rules="emailRules"
        type="email"
        required
      ></v-text-field>

      <!-- Password -->
      <v-text-field
        v-model="formData.password"
        label="Password"
        :rules="passwordRules"
        type="password"
        required
      ></v-text-field>

      <!-- rePassword -->

      <v-text-field
        v-model="formData.rePassword"
        label="Password Confirmation"
        type="password"
        :rules="RePasswordRules.concat(passwordConfirmationRule)"
        required
      ></v-text-field>

      <v-btn class="mr-4" type="submit"> Submit </v-btn>
    </form>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    // VALIDATION RULES
    emailRules: [
      (value) => !!value || "Email is Required.",
      (value) => value.indexOf("@") !== 0 || "Email should have a username",
      (value) => value.includes("@") || "Email must contained @",
      (value) => value.indexOf(".") - value.indexOf("@") > 1 || "Invalid Email",
      (value) => value.indexOf(".") <= value.length - 3 || "Invalid Domain",
    ],
    passwordRules: [
      (value) => !!value || "Password Required",
      (value) =>
        value.toLowerCase() !== value ||
        "Password must have at least 1 Uppercase Letter.",
      (value) => /\d/.test(value) || "Password must contain at least 1 number",
    ],
    RePasswordRules: [
      (value) => !!value || "Password Confirmation is required",
    ],
    // VALIDATION RULES
    formData: {
      email: "",
      password: "",
      rePassword: "",
    },
  }),

  methods: {
    ...mapActions(["signUpUser"]),
    submitHandler() {
      const requestModel = {
        email: this.formData.email,
        password: this.formData.password,
      };
      this.signUpUser(requestModel);
    },
  },
  computed: {
    passwordConfirmationRule() {
      return (
        this.formData.password === this.formData.rePassword ||
        "Password Must Match"
      );
    },
    ...mapState(["user"]),
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
