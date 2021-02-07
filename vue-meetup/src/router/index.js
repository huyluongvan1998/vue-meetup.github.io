import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Template from "../components/Template.vue";
//User
import SignUp from "../components/User/SignUp.vue";
import SignIn from "../components/User/SignIn.vue";
import SignOut from "../components/User/SignOut.vue";
//MeetUp
import CreateMeetUp from "../components/Meetups/CreateMeetUp.vue";
import ViewMeetUps from "../components/Meetups/ViewMeetUps.vue";

Vue.use(VueRouter);

const routes = [
  //Home
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/template",
    name: "Template",
    component: Template,
  },
  //User Session
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-out",
    name: "SignOut",
    component: SignOut,
  },
  //MeetUp Session
  {
    path: "/create-meetup",
    name: "CreateMeetUp",
    component: CreateMeetUp,
  },
  {
    path: "/view-meetup",
    name: "ViewMeetUps",
    component: ViewMeetUps,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
