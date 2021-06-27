<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider :trigger="null" v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <SiderMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <Header />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px"> </a-layout-content>
      <a-layout-footer style="text-align: center">
        <Footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
  <SettingDrawer />
</template>

<script>
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import SiderMenu from "@/layouts/SiderMenu";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import SettingDrawer from "@/components/SettingDrawer";
export default {
  components: {
    Header,
    SiderMenu,
    Footer,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SettingDrawer,
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
.logo {
}
</style>
