<template>
  <v-container v-if="user">
    <v-row justify="center">
      <div><h1>Open Positions</h1></div>
    </v-row>
    <v-spacer/>
    <PositionCard 
      v-for="position in openPositions" 
      :key="position.id"
      :position="position"/>
  </v-container>
</template>

<script>
import PositionCard from '@/components/PositionCard'
import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
    PositionCard,
  },
  data() {
    return {
      openPositions: [],
    }
  },
  computed: {
    ...mapGetters({
        user: 'getUser',
    }),
  },
  created() {
    this.bind()
  },
  methods: {
    async bind(){
      await this.getOpenPositions()
    },
    async getOpenPositions() {
      const response = await this.$axios('/api/journal/positions')

      for(var x = 0; x < response.data.length; x++) {
        const openPosition = {
          id: x,
          instrument: response.data[x].instrument,
          pl: response.data[x].pl,
          unrealizedpl: response.data[x].unrealizedpl,
          margin: response.data[x].marginUsed,
          strength: response.data[x].strength
        }
        this.openPositions.push(openPosition)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
