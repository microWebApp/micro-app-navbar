<template>
  <div id="app">
    <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <!-- <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content> -->
    </a-layout>
  </a-layout>
  </div>
</template>

<script>
import { publicApiFunction } from '@patpat-f2e/turing-util'
import { Layout, Icon, Menu } from 'ant-design-vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    'a-layout': Layout,
    // 'a-layout-content': Layout.Content,
    'a-layout-header': Layout.Header,
    'a-icon': Icon,
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'a-layout-sider': Layout.Sider
  },
  data () {
    return {
      collapsed: false
    }
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
    onCollapse (collapsed, type) {
      console.log(collapsed, type)
    },
    onBreakpoint (broken) {
      console.log(broken)
    }
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
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

</style>
