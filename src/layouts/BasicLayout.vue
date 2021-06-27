<template>
  <Header />
  <SiderMenu />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import SiderMenu from "@/layouts/SiderMenu";
export default {
  components: {
    Header,
    SiderMenu,
    Footer,
  },
};
</script>

<style scoped></style>
