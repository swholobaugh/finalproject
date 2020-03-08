<template>
  <div class="bg-gray-800 min-h-screen">
    <NavBar />
    <router-view/>
  </div>      
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped></style>