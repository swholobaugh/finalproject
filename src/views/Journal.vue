<template>
    <v-content>
    <v-row justify="center">
        <div><h1>Journal</h1></div>
    </v-row>
    <v-spacer/>
    <v-container>
        <JournalForm/>
    </v-container>
    </v-content>
</template>

<script>
import JournalForm from '@/components/JournalForm.vue'

export default {
    name: 'Journal',
    components: {
        JournalForm
    }
}
</script>

<style></style>