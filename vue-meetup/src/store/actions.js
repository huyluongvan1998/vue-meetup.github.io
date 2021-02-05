import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBkJiAtAnAsPH9ZY8DKaoiBnJbqhs2_ttc",
  authDomain: "vue-meetup-afa73.firebaseapp.com",
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
    commit("setUser");
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => console.log(err));
  },
  //SignIn
  signInUser({ commit }, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then((user) => {
      const newUser = {
        id: user.key,
      }
      
      return newUser
    })
  },

  //MeetUp Session
  async createMeetUp({ commit }, payload) {
    let firebaseUrl = "";
    const storageRef = firebase
      .storage()
      .ref("images/" + payload.imageUrl.name);
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
    db.ref("meetUp").push(obj);
    commit("setMeetUp", obj);
  },
  //Load MeetUps
  loadMeetUps({ commit }) {
    db.ref("meetUp")
      .once("value")
      .then((snapshot) => {
        const data = [];
        const results = snapshot.val();

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
      .catch((err) => console.error(err));
  },
};
