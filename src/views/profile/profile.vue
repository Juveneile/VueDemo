<template>
  <Form ref="userForm" :model="userProfile" :label-width="100">
      <crud-select v-model="userProfile.genderCode"
                   selectValueKey="code"
                   selectLabelKey="name"
                   :dic="zdSex">
      </crud-select>
  </Form>
</template>

<script>
import CrudSelect from '@/components/crud-select/crud-select.vue'

export default {
  name: 'profile',
  components: { CrudSelect },
  data () {
    return {
      zdSex: [{ code: '1', name: '男性' }, { code: '2', name: '女性' }],
      userProfile: { genderCode: '1' }
    }
  }
}
</script>

<style scoped>

</style>
