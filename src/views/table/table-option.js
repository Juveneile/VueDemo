export default (_this) => {
  return {
    // 其他参数可参照API文档 https://www.bookstack.cn/read/avue-2.x/391487d752fdf241.md
    searchMenuSpan: 6,
    labelWidth: 160,
    headerAlign: 'center',
    align: 'center',
    span: 20,
    gutter: 10,
    viewBtn: true,
    index: true,
    border: true,
    column: [
      {
        label: '本地 ID',
        prop: 'localId',
        search: true
      },
      {
        label: '姓名',
        prop: 'patientName',
        search: true,
        rules: [{
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        }]
      },
      {
        label: '性别',
        prop: 'genderName',
        type: 'select',
        dicData: [
          { label: '男', value: '1' },
          { label: '女', value: '2' }
        ]
      },
      {
        label: '出生日期',
        prop: 'birthDate',
        type: 'date',
        format: 'yyyy-MM-dd hh:mm:ss',
        valueFormat: 'yyyy-MM-dd hh:mm:ss'
      }
    ]
  }
}
