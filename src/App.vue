<template>
  <v-app>
    <v-content>
      <v-toolbar app>
        <v-toolbar-title>
  
          <img src="@/assets/labMed.jpg" alt="" width="140">
  
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat @click="logout" v-if="isAuthenticated">
          <span class="mr-2">Logout</span>
        </v-btn>
      </v-toolbar>
  
      <router-view></router-view>
  
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        isLogin : ''
      }
    },
    methods: {
      logout() {
        this.$store.commit("logout");
        this.$router.push("/login");
      }
    },
    computed: {
      isAuthenticated() {
        return this.$store.getters.isLoggedIn;
      },
    }
  }
</script>

<style>
  .theme--light.application {
    background: white !important;
    color: white;
  }
  
  .theme--light.v-toolbar {
    background: white;
  }
</style>
