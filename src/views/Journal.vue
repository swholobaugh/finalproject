<template>
  <div>
    <h1 class="p-4 text-center text-4xl">Journal Page</h1>
    <div class=flex>
      <div class="flex-1 bg-gray-600 p-4 m-2">
        <JournalForm />
      </div>
    </div>
  </div>
</template>

<script>
import JournalForm from '../components/JournalForm'

export default {
    name: 'Journal',
    components: {
      JournalForm
    }
}
</script>

<style lang="scss" scoped></style>