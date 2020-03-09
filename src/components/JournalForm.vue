<template>
  <div class="flex">
      <label class="flex-1">
          <div class="text-black text-center">Date</div>
      </label>
      <label class="flex-1">
          <div class="text-black text-center">Symbol</div>
      </label>
      <label class="flex-1">
          <div class="text-black text-center">Open Price</div>
      </label>
      <label class="flex-1">
          <div class="text-black text-center">Closing Price</div>
      </label>
      <label class="flex-1">
          <div class="text-black text-center">P/L</div>
      </label>
      <label class="flex-1">
          <div class="text-black text-center">Balance</div>
      </label>
      <label class="flex-1">
          <div class="text-black text-center">Comment</div>
          <input v-model="comment" class="form-input mt-1 w-56" placeholder="Enter comment..." />
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