<template>
  <div id="app">
    <div id="nav-left" v-if="navBar">
      <ul>
        <li>
          <router-link to="/">首页仪表盘</router-link>
        </li>
        <li>
          <router-link to="/account">用户管理</router-link>
        </li>
        <li>
          <router-link to="/account/login">登录</router-link>
        </li>
      </ul>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <div id="nav-top" v-if="navBar">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <DatePicker/>
    </div>
    <router-view :class="rvContent"/>
  </div>
</template>

<script>
import { publicApiFunction } from '@patpat-f2e/turing-util'
import { DatePicker } from 'ant-design-vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    DatePicker
  },
  mounted () {
    publicApiFunction()
  },
  computed: {
    ...mapGetters({
      navBar: 'navBar'
    }),
    rvContent () {
      return this.navBar ? 'rv-content' : 'rv-content-full'
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav-top {
  padding: 30px;
  margin-left: var(--navbar-left-width);
  background-color: red;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#nav-left {
  position: absolute;
  height: 100%;
  width: var(--navbar-left-width);
  // padding: 30px;
  background-color: gold;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.rv-content {
  margin-left: var(--navbar-left-width);
}
.rv-content-full {
  background-color: #ccc;
}
</style>
