import { createApp } from "vue";
import { createPinia } from "pinia";
import {
  createPersistedState,
  type StorageLike,
} from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router/index.ts";
import localforageStorage from "@/tools/localforageStorage.ts";
import "@/main.css";
import "@/main.scss";
import i18n from "@/i18n/index.ts";
const app = createApp(App);
const pinia = createPinia();
pinia.use(createPersistedState({
  storage: localforageStorage as unknown as StorageLike,
}));


app.use(pinia);
app.use(router);
app.use(i18n);
app.mount("#app");
