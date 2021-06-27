<template>
  <a-drawer
    placement="right"
    :closable="false"
    v-model:visible="visible"
    :after-visible-change="afterVisibleChange"
    width="300px"
  >
    <template v-slot:handle>
      <div class="handle" @click="() => (visible = !visible)">
        <SettingOutlined
          :typeof="visible ? 'CloseCircleTwoTone' : 'SettingOutlined'"
        />
      </div>
    </template>
    <div>
      <!--      <template>-->
      <h2>整体风格定制</h2>
      <a-radio-group v-model:value="navTheme">
        <a-radio value="dark">深色</a-radio>
        <a-radio value="light">白色</a-radio>
      </a-radio-group>
      <h2>导航模式</h2>
      <a-radio-group v-model:value="navLayout">
        <a-radio value="left">左侧</a-radio>
        <a-radio value="top">顶部</a-radio>
      </a-radio-group>
      <!--      </template>-->
      <!--      <script>-->
      <!--        import { defineComponent, ref } from 'vue';-->
      <!--        export default defineComponent({-->
      <!--          setup() {-->
      <!--            const navTheme = ref('dark');-->
      <!--            const navLayout = ref('left');-->
      <!--            return {-->
      <!--              navTheme,-->
      <!--              navLayout-->
      <!--            };-->
      <!--          },-->
      <!--        });-->
      <!--      </script>-->
    </div>
  </a-drawer>
</template>
<script>
import { defineComponent, ref } from "vue";
import { SettingOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    SettingOutlined,
  },
  setup() {
    const visible = ref(false);

    const afterVisibleChange = (bool) => {
      console.log("visible", bool);
    };

    // const showDrawer = () => {
    //   visible.value = true;
    // };

    return {
      visible,
      afterVisibleChange,
      // showDrawer,
    };
  },
});
</script>
<style scoped>
.handle {
  z-index: 9999;
  left: -48px;
  position: absolute;
  top: 300px;
  width: 48px;
  height: 48px;
  background: #1890ff;
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 48px;
  border-radius: 3px 0 0 3px;
}
</style>
