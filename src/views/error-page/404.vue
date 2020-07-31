<template>
  <error-content :src="src" code="404" desc="Oh~~您的页面好像飞走了~"/>
</template>

<script>
import error404 from '@/assets/images/error-404.svg'
import ErrorContent from './error-content.vue'
export default {
  name: 'Error404',
  components: {
    ErrorContent
  },
  data () {
    return {
      src: error404
    }
  }
}
</script>
