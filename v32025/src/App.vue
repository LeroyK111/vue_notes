<script setup lang="ts">
/**
 * @author Leroy
 * @description 根组件保留，用于全局配置
*/
import { NConfigProvider } from "naive-ui"
import {useThemeStore} from "@/stores/globalTheme"


const useTheme = useThemeStore()


</script>

<template>
  <Suspense>
    <n-config-provider abstract :theme="useTheme.theme">
      <router-view />
    </n-config-provider>
  </Suspense>
</template>

<style lang="scss"></style>
