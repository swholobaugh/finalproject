<template>
  <nav class="bg-gray-500 h-24 border-b-2 border-gray-600">
      <router-link to="/" class="font-semibold text-2xl p-2">
        <button class="hover:bg-gray-800 hover:text-white">Home</button>
      </router-link>
      <router-link to="/Login" class="font-semibold text-2xl p-4">
        <button class="hover:bg-gray-800 hover:text-white">Login</button>
      </router-link>
  </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="scss" scoped></style>