import { createApp } from "vue";
import { createPinia } from "pinia";
import { IonicVue } from "@ionic/vue";

import App from "./App.vue";
import router from "./router";
import "./assets/scss/global.scss";

const app = createApp(App);

app.use(IonicVue);
app.use(createPinia());
app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});
