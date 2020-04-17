<template>
  <v-app>
    <v-card>
      <v-card-title>
        <NavBar />
      </v-card-title>
    </v-card>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar,
  },
}
</script>
