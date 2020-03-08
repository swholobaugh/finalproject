<template>
  <nav class="bg-gray-500">
      <router-link to="/" class="font-semibold text-xl tracking-tight p-2">Home</router-link>
      <router-link to="/Journal" class="font-semibold text-xl tracking-tight p-4">Journal</router-link>
      <router-link to="/Login" class="font-semibold text-xl tracking-tight p-4">Login</router-link>
  </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="scss" scoped></style>