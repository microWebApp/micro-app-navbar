<template>
  <div class="home">
    <!-- <h3>首页</h3> -->
    <p>首页 仪表盘</p>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: green;
}
</style>
