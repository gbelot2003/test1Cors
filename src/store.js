export default {
  state:{
      token:''
  },
  gettets:{
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
        state.token = payload.access_token;
        localStorage.setItem('token', payload.access_token);
        localStorage.setItem('expiration', payload.expires_in);
    },
    logout(state){
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('user');
        localStorage.removeItem('userName');
        localStorage.removeItem('roles');
        state.isLoggedIn = false;
        state.currentUser = null;
    }
  },
  actions:{}
}