import { createI18n } from "vue-i18n";

// 全局语言切换
const messages = {
  zh: {
    language: "中文简体",
  },
  en: {
    language: "English",
  },
};

const i18n = createI18n({
  // 组合式api
  legacy: false,
  locale: "zh",
  fallbackLocale: "en",
  messages,
});

export default i18n;
