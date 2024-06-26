import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import mainStyle from "./styles/main/main.scss";

createApp(App)
  .use(Quasar, quasarUserOptions, mainStyle)
  .use(store)
  .use(router)
  .mount("#app");
