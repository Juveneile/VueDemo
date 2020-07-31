<template>
  <error-content :src="src" code="403" desc="Oh~~您的请求被服务器拒绝了~"/>
</template>

<script>
import error401 from '@/assets/images/error-401.svg'
import ErrorContent from './error-content.vue'

export default {
  name: 'Error403',
  components: {
    ErrorContent
  },
  data () {
    return {
      src: error401
    }
  }
}
</script>
