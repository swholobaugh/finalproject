<template>
  <v-toolbar app dark>
    <v-toolbar-title>
      <span class="font-weight-light">trade</span>
      <span class="font-weight-regular">Portal</span>
    </v-toolbar-title>

    <v-spacer />
    <v-card>
      <v-btn to="/home">Home</v-btn>
      <v-btn to="/journal">Journal</v-btn>
      <v-btn to="/login">Login</v-btn>
    </v-card>
  </v-toolbar>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="scss" scoped></style>