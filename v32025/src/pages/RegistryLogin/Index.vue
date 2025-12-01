<template>
  <div>
    <h1>{{ t("loginBtn") }}</h1>
    <button @click="changeLanguage">点我切换</button>
  </div>
</template>

<script setup lang="ts">
import { useI18n  } from 'vue-i18n'
const { t, locale, availableLocales } = useI18n() 

const changeLanguage = () => {
  locale.value = locale.value === 'en' ? 'zh' : 'en'
}


</script>

<style scoped lang="scss"></style>


<i18n>
{
  "en": {
    "loginBtn": "login"
  },
  "zh": {
    "loginBtn": "登录"
  }
}
</i18n>