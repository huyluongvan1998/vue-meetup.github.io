<template>
  <v-container >
    <v-row>
      <v-form @click="submitHandler" v-model="valid" lazy-validation>
      <h1>Meet Up Form</h1>
        <v-col >
          <v-text-field
            v-model="formData.title"
            :counter="50"
            :rules="titleRules"
            label="Title"
            required
          ></v-text-field>

          <v-text-field
            v-model="formData.description"
            label="Description"
            required
          ></v-text-field>
        </v-col>

        <v-col>
          <v-file-input
            label="Images input"
            prepend-icon="fa-camera"
            v-model="formData.imageUrl"
            @change="getImageUrl"
            filled
          ></v-file-input>
          <v-img :src="url" max-height="150" max-width="250"></v-img>
        </v-col>

        <v-col>
          <v-date-picker v-model="formData.date" class="mt-4"></v-date-picker>
        </v-col>

        <v-col>
          <v-time-picker
            v-model="formData.timeHours"
            class="mt-4"
          ></v-time-picker>
        </v-col>

        <v-col>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="submitHandler"
          >
            Submit
          </v-btn>
        </v-col>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import { uuid } from "vue-uuid";

export default {
  data: () => ({
    valid: true,

    titleRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    url: null,
    formData: {
      title: "",
      description: "",
      date: "2021-01-01",
      timeHours: "03:10PM",
      imageUrl: [],
    },
  }),
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["createMeetUp"]),
    submitHandler() {
      const { title, description, date, timeHours, imageUrl } = this.formData;
      const id = this.user.id;
      this.createMeetUp({ title, description, date, timeHours, imageUrl, id });
      this.$router.push("/view-meetup");
    },
    getImageUrl() {
      if (this.formData.imageUrl) {
        return (this.url = URL.createObjectURL(this.formData.imageUrl));
      } else {
        return (this.url = null);
      }
    },
  },
  created() {
    this.user.meetUpList = [];
    console.log(this.user.meetUpList);
    if (!this.user.id) {
      this.$router.push("/sign-in");
    }
  },
};
</script>

<style scoped>
  .row{
    justify-content: center;
  }
</style>