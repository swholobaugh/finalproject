<template>
    <v-data-table
        :headers="headers"
        :items="trades"
        :items-perpage="10"
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
                    text: 'Date',
                    align: 'start',
                    sortable: 'true',
                    value: 'date'
                },
                { text: 'Symbol', value: 'symbol' },
                { text: 'Buy Price', value: 'buyprice' },
                { text: 'Sell Price', value: 'sellprice' },
                { text: 'Profit/Loss', value: 'profitloss' },
                { text: 'Closing Date', value: 'closingdate' },
            ],
            trades: [
                {
                    date: '',
                    symbol: '',
                    buyprice: '',
                    sellprice: '',
                    profitloss: '',
                    closingdate: ''
                },
            ]
        }
    }
}
</script>

<style>

</style>