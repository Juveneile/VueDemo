<template>
  <div>
      <avue-crud :data="tableData"
                 :page.sync="page"
                 :option="option"
                 v-model="obj"
                 :table-loading="loading"
                 @on-load="getList"
                 @row-update="rowUpdate"
                 @row-save="rowSave"
                 @row-del="rowDel"
                 @size-change="sizeChange"
                 @current-change="currentChange"
                 @refresh-change="refreshChange"
                 @search-reset="searchChange"
                 @search-change="searchChange">
      </avue-crud>
  </div>
</template>

<script>
import { listApi, addApi, updateApi, delApi } from '@/api/modules/tableApi'
import option from './table-option'

export default {
  name: 'Table',
  data () {
    return {
      tableData: [],
      loading: false,
      page: {
        total: 0,
        pagerCount: 5,
        currentPage: 1,
        pageSize: 5,
        pageSizes: [
          5,
          10,
          15,
          20,
          25,
          30
        ],
        layout: 'total, sizes, prev, pager, next, jumper',
        background: true
      },
      obj: {},
      params: {}
    }
  },
  computed: {
    option () {
      return option(this)
    }
  },
  methods: {
    getList () {
      this.loading = true
      const param = Object.assign({
        pageNo: this.page.currentPage,
        pageSize: this.page.pageSize
      }, this.params)
      listApi(param).then(res => {
        this.tableData = res.data.list
        this.loading = false
        this.page.total = res.data.total
      }, () => {
        this.$message.error('数据加载失败')
        this.loading = false
      }).catch(() => {
        this.$message.error('数据加载失败')
        this.loading = false
      })
    },
    rowSave (row, done, loading) {
      addApi(row).then(() => {
        this.$message.success('新增成功')
        done()
        this.getList()
      }).catch(() => {
        loading()
      })
    },
    rowUpdate (row, index, done, loading) {
      updateApi(row).then(() => {
        this.$message.success('修改成功')
        done()
        this.getList()
      }).catch(() => {
        loading()
      })
    },
    rowDel (row) {
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return delApi({ id: row.id })
      }).then(() => {
        this.$message.success('删除成功')
        this.getList()
      })
    },
    sizeChange (val) {
      this.page.currentPage = 1
      this.page.pageSize = val
      this.getList()
    },
    currentChange (val) {
      this.page.currentPage = val
      this.getList()
    },
    searchChange (params, done) {
      if (done) done()
      this.params = params
      this.page.currentPage = 1
      this.getList()
    },
    refreshChange () {
      this.getList()
    }
  }
}
</script>

<style lang="less" scoped>
  .table_container {
    background-color: #2b4b6b;
    height: 100%;
  }
  .table_box {
    width: 80%;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
