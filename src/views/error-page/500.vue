<template>
  <error-content :src="src" code="500" desc="Oh~~鬼知道服务器经历了什么~"/>
</template>

<script>
import error500 from '@/assets/images/error-500.svg'
import ErrorContent from './error-content.vue'
export default {
  name: 'Error500',
  components: {
    ErrorContent
  },
  data () {
    return {
      src: error500
    }
  }
}
</script>
