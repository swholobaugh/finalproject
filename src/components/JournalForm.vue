<template>
  <div>
      <label class="block">
          <div class="text-gray-500">Comment</div>
          <input v-model="comment" class="form-input mt-1 w-32" placeholder="Enter comment..." />
      </label>
  </div>
</template>

<script>
export default {
    name: 'JournalForm'
}
</script>

<style>

</style>