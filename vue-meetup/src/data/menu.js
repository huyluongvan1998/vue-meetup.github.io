export default [
  //meetup
  {
    icon: "fa fa-users",
    content: "VIEW MEETUPS",
    path: "/view-meetup",
    isShow: true,
  },
  {
    icon: "fa fa-map-marker",
    content: "CREATE MEETUP",
    path: "/create-meetup",
    isShow: true,
  },
  //user
  {
    icon: "fa fa-user",
    content: "PROFILE",
    path: "/profile",
    isSignIn: true,
  },
  {
    icon: "fa fa-user-plus",
    content: "SIGN UP",
    path: "/sign-up",
    isSignIn: false,
  },
  {
    icon: "fa fa-id-badge",
    content: "SIGN IN",
    path: "/sign-in",
    isSignIn: false,
  },
  {
    icon: "fa fa-sign-out",
    content: "LOG OUT",
    path: "/sign-out",
    isSignIn: true,
  },
];
