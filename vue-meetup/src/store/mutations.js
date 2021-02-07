export default {
  setUser(state, payload) {
    state.user = {
      id: payload.id,
      email: payload.email,
      meetUpList: [],
      isSignIn: payload.isSignIn,
    };
  },
  setMeetUps(state, payload) {
    return payload.map((el) => state.user.meetUpList.push(el));
  },
  setError(state, payload) {
    return (state.error = {
      msg: payload.msg,
      code: payload.code,
      isDisplay: true,
      type: payload.type,
    });
  },
};
