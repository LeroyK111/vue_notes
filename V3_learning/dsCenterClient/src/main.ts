import { createApp } from "vue";
import { createPinia } from "pinia";
import { createPersistedState, type StorageLike } from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router/index.ts";
import localforageStorage from "@/tools/localforageStorage.ts";

const app = createApp(App);
const pinia = createPinia();
pinia.use(createPersistedState({
  storage: localforageStorage as unknown as StorageLike,
}));
app.use(pinia);
app.use(router);

app.mount("#app");
