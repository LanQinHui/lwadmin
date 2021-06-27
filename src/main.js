import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Layout, Icon } from "ant-design-vue";

createApp(App)
  .use(store)
  .use(router)
  .use(Button)
  .use(Layout)
  .use(Icon)
  .mount("#app");
