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
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
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
