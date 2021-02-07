import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkJiAtAnAsPH9ZY8DKaoiBnJbqhs2_ttc",
  authDomain: "vue-meetup-afa73.firebaseapp.com",
  databaseURL: "https://vue-meetup-afa73-default-rtdb.firebaseio.com",
  projectId: "vue-meetup-afa73",
  storageBucket: "vue-meetup-afa73.appspot.com",
  messagingSenderId: "902717912653",
  appId: "1:902717912653:web:d71a862b908ada709b4e04",
  measurementId: "G-1VMRL23FV6",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default {
  //User Session
  //SignUp
  signUpUser({ commit }, payload) {
    let key = "";
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(async (auth) => {
        key = auth.user.uid;
        const currentUser = {
          id: key,
          email: payload.email,
          meetUpList: [],
          isSignIn: true,
        };
        await commit("setUser", currentUser, { id: key });
        await commit("setError", {
          msg: "REGISTER SUCCESS!",
          code: "",
          type: "success",
        });
      })
      .catch((err) => console.log(err));
  },
  // SignIn
  signInUser({ commit, dispatch }, payload) {
    let key = "";
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(async (auth) => {
        key = auth.user.uid;
        const newUser = {
          id: key,
          email: payload.email,
          meetUpList: [],
          isSignIn: true,
        };
        console.log(auth);
        await commit("setUser", newUser);
        await dispatch("loadMeetUps", newUser.id);
        await commit("setError", {
          msg: "LOGIN SUCCESS",
          code: "",
          type: "success",
        });
      })
      .catch((err) => {
        commit("setError", {
          msg: "Invalid Credentials",
          code: err.code,
          type: "error",
        });
      });
  },
  async signOutUser({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("successs"));
    let resetUSer = {
      isSignIn: false,
    };
    await commit("setUser", resetUSer);
    await commit("setError", {
      msg: "LOG OUT SUCCESS",
      code: "",
      type: "success",
    });
  },

  //MeetUp Session
  async createMeetUp({ dispatch, commit }, payload) {
    let firebaseUrl = "";
    console.log(payload);
    const storageRef = firebase
      .storage()
      .ref("images/" + payload.id + "/" + payload.imageUrl.name);
    await storageRef.put(payload.imageUrl);
    await storageRef.getDownloadURL().then((url) => {
      console.log(url);
      firebaseUrl = url;
    });
    const obj = {
      title: payload.title,
      description: payload.description,
      date: payload.date,
      timeHours: payload.timeHours,
      imageUrl: firebaseUrl,
    };
    //upload images
    db.ref("meetUp/" + payload.id).push(obj);
    await dispatch("loadMeetUps", payload.id);
    await commit("setError", {
      msg: "CREATE SUCCESS",
      code: "",
      type: "success",
    });
  },
  //Load MeetUps
  loadMeetUps({ commit }, payload) {
    console.log("id:", payload);
    let id = payload;
    db.ref("meetUp/" + id)
      .once("value")
      .then((snapshot) => {
        const data = [];
        const results = snapshot.val();
        console.log(results);
        for (let key in results) {
          let obj = {
            title: results[key].title,
            description: results[key].description,
            date: results[key].date,
            timeHours: results[key].timeHours,
            imageUrl: results[key].imageUrl,
          };
          data.push(obj);
        }

        commit("setMeetUps", data);
      })
      .catch((err) =>
        commit("setError", {
          msg: "Cannot load meetup",
          code: err.code,
          type: "warning",
        })
      );
  },
};
