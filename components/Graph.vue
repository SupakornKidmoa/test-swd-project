<template>
  <div>
    <vue-chart :data="dataChart" :options="options" type="bar" :height="500" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  props: {
    data: {
      type: [Array, Object],
      required: false,
      default: () => {
        return []
      },
    },
    dataLabels: {
      type: [Array, Object],
      required: false,
      default: () => {
        return []
      },
    },
    title: {
      type: String,
      required: false,
      default: () => {
        return ''
      },
    },
  },
  data() {
    return {
      dataChart: {
        labels: this.dataLabels,
        datasets: [
          {
            label: 'data',
            backgroundColor: 'rgb(230, 247, 255)',
            data: this.data.data1,
          },
          {
            label: 'data2',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            data: this.data.data2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
  mounted() {},
  methods: {},
}
</script>
