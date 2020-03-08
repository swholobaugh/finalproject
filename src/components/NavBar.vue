<template>
  <nav class="bg-gray-800">
      <router-link to="/" class="font-semibold text-xl tracking-tight">Home</router-link>
      <router-link to="/Journal" class="font-semibold text-xl tracking-tight">Journal</router-link>
      <router-link to="/Login" class="font-semibold text-xl tracking-tight">Login</router-link>
  </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="scss" scoped></style>