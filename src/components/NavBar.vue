<template>
  <v-toolbar app>
    <v-toolbar-title>
      <span class="font-weight-light">trade</span>
      <span class="font-weight-regular">Portal</span>
    </v-toolbar-title>
    <v-spacer />
    <v-btn :to="{ name: 'Home' }">Home</v-btn>
    <v-btn :to="{ name: 'Journal' }">Journal</v-btn>
    <v-btn :to="{ name: 'Login' }">Login</v-btn>
  </v-toolbar>
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
    }
}
</script>