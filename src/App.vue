<!--UI-->
<template>
  <div id="app">
    <!--路由占位符 将所有路由的组件渲染到这里-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<!--行为-->
<script>
export default {
  name: 'app'
}
</script>

<!--样式-->
<style>
</style>
