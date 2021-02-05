<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="formData.email"
        :counter="10"
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
export default {
  data: () => ({
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

  methods: {
    onSubmitHandler() {},
  },
};
</script>
