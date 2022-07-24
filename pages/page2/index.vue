<template>
  <div>
    <a-skeleton :loading="loading" active />
    <div v-if="loading === false">
      <Graph :data="graphData" :data-labels="labels" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Graph from '~/components/Graph'
export default {
  name: 'IndexPage',
  components: {
    Graph,
  },
  data() {
    return {
      loading: true,
      dataSource: [],
      graphData: {
        data1: [],
        data2: [],
      },
      labels: [],
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    moment,
    loadData() {
      this.$axios
        .get('https://swdapi.ddns.net:8090/data/ttntest')
        .then((response) => {
          if (response.data.length > 0) {
            this.dataSource = response.data
            this.loading = true
            this.setData()
          } else {
            this.dataSource.splice(0, this.dataSource.length)
          }
        })
        .catch((e) => {
          this.$message.error(e.response ? e.response.data.message : e.message)
        })
        .finally((response) => {})
    },
    setData() {
      const graphDataTest = this.dataSource
        .map((item) => {
          return moment(item.timestamp).format('DD-MM-YYYY')
        })
        .filter((item, index, selfArray) => {
          return selfArray.indexOf(item) === index
        })
      // console.log(graphDataTest)
      const datasets = []
      const datasets2 = []
      for (let i = 0; i < graphDataTest.length; i++) {
        const filterData = this.dataSource.filter((item) => {
          if (
            moment(item.timestamp).format('DD-MM-YYYY') === graphDataTest[i]
          ) {
            return item.data
          } else {
            return undefined
          }
        })
        // console.log(filterData)
        const maxData = Math.max(...filterData.map((o) => o.data))
        const maxData2 = Math.max(...filterData.map((o) => o.data2))
        datasets.push(maxData)
        datasets2.push(maxData2)
      }
      // console.log(datasets)
      this.labels = graphDataTest
      this.graphData.data1 = datasets
      this.graphData.data2 = datasets2
      if (
        this.labels.length > 0 &&
        this.graphData.data1.length > 0 &&
        this.graphData.data2.length > 0
      ) {
        this.loading = false
      }
    },
  },
}
</script>
