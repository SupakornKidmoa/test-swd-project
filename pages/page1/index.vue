<template>
  <div>
    <a-table
      :columns="columns"
      :data-source="dataSource"
      :loading="tableLoading"
      :pagination="pagination"
      row-key="id"
      size="middle"
      @change="handleTableChange"
    >
      <div slot="id" slot-scope="id">
        <b>{{ id | formatNumber }}</b>
      </div>
      <div slot="data" slot-scope="data">
        <span>{{ data | formatNumberDecimal }}</span>
      </div>
      <div slot="data2" slot-scope="data2">
        <span>{{ data2 | formatNumberDecimal }}</span>
      </div>
      <div slot="timestamp" slot-scope="timestamp">
        <span>{{ moment(timestamp).format('DD-MM-YYYY hh:mm:ss') }}</span>
      </div>
    </a-table>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'IndexPage',
  data() {
    return {
      tableLoading: true,
      dataSource: [],
      pagination: {
        size: 'small',
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0,
        current: 1,
        defaultCurrent: 1,
        pageSize: 10,
        defaultPageSize: 10,
        pageSizeOptions: ['10', '50', '100'],
      },
      columns: [
        {
          title: 'id',
          dataIndex: 'id',
          scopedSlots: { customRender: 'id' },
          sorter: (a, b) => a.id - b.id,
        },
        {
          title: 'data',
          dataIndex: 'data',
          scopedSlots: { customRender: 'data' },
          sorter: (a, b) => a.data - b.data,
        },
        {
          title: 'data2',
          dataIndex: 'data2',
          scopedSlots: { customRender: 'data2' },
          sorter: (a, b) => a.data2 - b.data2,
        },
        {
          title: 'timestamp',
          dataIndex: 'timestamp',
          scopedSlots: { customRender: 'timestamp' },
        },
      ],
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
          } else {
            this.dataSource.splice(0, this.dataSource.length)
          }
        })
        .catch((e) => {
          this.$message.error(e.response ? e.response.data.message : e.message)
        })
        .finally((response) => {
          this.tableLoading = false
        })
    },
    handleTableChange(pagination, filters, sorter) {
      this.pagination = pagination
    },
  },
}
</script>
