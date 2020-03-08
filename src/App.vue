<template>
  <div class="bg-gray-300 min-h-screen">
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