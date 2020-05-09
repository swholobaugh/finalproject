<template>
    <v-data-table
        :headers="headers"
        :items="transactions"
        class="elevation-1"
    ></v-data-table>
</template>

<script>
export default {
    name: 'JournalForm',
    data () {
        return {
            headers: [
                {
                    text: 'ID',
                    align: 'start',
                    sortable: 'true',
                    value: 'id'
                },
                { text: 'Date', value: 'date' },
                { text: 'Type', value: 'type' },
                { text: 'Instrument', value: 'instrument' },
                { text: 'Units', value: 'units' },
                { text: 'Price', value: 'price' },
            ],
            transactions: [],
        }
    },/*
    mounted() {
        this.getJournal()
    },*/
    created() {
        this.bind()
    },
    methods: {
        async bind() {
            await this.getJournal()
        },
        async getJournal() {
            const response = await this.$axios('api/journal/')
            //var journal = []
            for(var x = 0; x < response.data.length; x++) {
                var item = {
                    id: response.data[x].id,
                    date: Date.parse(response.data[x].date),
                    type: response.data[x].type,
                    instrument: response.data[x].instrument,
                    units: response.data[x].units,
                    price: response.data[x].price,
                }
                this.transactions.push(item);
            }
        }
    }
}
</script>

<style>

</style>