<template>
  <div>
    <h1 class="p-4 text-center text-4xl">Journal Page</h1>
    <div>
      <JournalForm />
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

<style></style>