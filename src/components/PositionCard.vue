<template>
<v-row justify="center">
  <v-card min-width="800">
    <v-card-title>Currency Symbol: {{position.instrument}}</v-card-title>
    <v-card-text>
      <div>Profit/Loss: {{position.pl}}</div>
      <div>Margin Used: {{position.margin}}</div>
      <div>Daily Strength: {{position.strength}}</div>
    </v-card-text>
  </v-card>
</v-row>
</template>

<script>
export default {
  name: 'PositionCard',
  props: {
    position: {
      type: Object,
      default: () => {},
    },
  }
}
</script>

<style>

</style>