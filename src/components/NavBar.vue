<template>
  <v-app-bar app dark>
    
      <span class="font-weight-light">currency</span>
      <span class="font-weight-regular">Portal</span>
    
    <v-spacer />
    <v-btn :to="{ name: 'Home' }">Home</v-btn>
    <v-btn :to="{ name: 'Journal' }">Journal</v-btn>
    <v-btn :to="{ name: 'Login' }">Login</v-btn>
  </v-app-bar>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'NavBar',
    computed: {
      ...mapGetters({
        user: 'getUser',
      }),
    },
    methods: {
      logOut() {
        this.$firebase.auth().signOut()
        this.setUser('')
        this.setIdToken('')
        this.$router.push('/')
      },
      ...mapActions(['setUser', 'setIdToken']),
    },
}
</script>