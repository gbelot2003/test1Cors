export default {
  state:{
      token: localStorage.getItem('token'),
      isLoggedIn: '',
  },
  getters:{
    isLoggedIn(state){
        return state.isLoggedIn;
    },
    getToken(state){
        return state.token;
    },
  },
  mutations:{
    loginSuccess(state, payload){
        state.auth_error = null;
        state.isLoggedIn = true;
        state.loading = false;
        state.token = payload.token;
        localStorage.setItem('token', payload.token);
    },
    logout(state){
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('user');
        state.isLoggedIn = false;
        state.currentUser = null;
    }
  },
  actions:{}
}