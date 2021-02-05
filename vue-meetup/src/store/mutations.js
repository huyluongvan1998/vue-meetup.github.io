export default {
  setUser(state) {
    console.log(state);
  },
  setMeetUps(state, payload) {
    return payload.map((el) => state.meetUpData.push(el));
  },
  setMeetUp(state, payload) {
    console.log(payload);
    return state.meetUpData.push(payload);
  },
};
