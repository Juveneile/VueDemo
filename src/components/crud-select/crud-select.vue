<template>
      <el-select
        v-model="gender"
        @change="handleChange">
        <el-option
          :key="item[selectValueKey]"
          :value="item[selectValueKey]"
          :label="item[selectLabelKey]"
          v-for="(item) in options"
        >
          <span>{{ item[selectLabelKey] }}</span>
        </el-option>
      </el-select>
</template>

<script>
export default {
  name: 'CrudSelect',
  data () {
    return {
      gender: '',
      options: []
    }
  },
  props: {
    value: {
      type: String,
      default () {
        return ''
      }
    },
    // 下拉框数据
    dic: {
      default: () => []
    },
    // 选项值对应key
    selectValueKey: {
      type: String,
      default: 'value'
    },
    // 选项显示内容对应key
    selectLabelKey: {
      type: String,
      default: 'label'
    }
  },
  watch: {
    value: {
      handler (n, o) {
        this.gender = n
      },
      immediate: true
    },
    dic: {
      handler (nv, ov) {
        this.options = nv
      },
      immediate: true
    }
  },
  methods: {
    handleChange (value) {
      // console.log(value)
      // 向父组件通信
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
