<script setup lang="ts">
import { onActivated, onDeactivated, ref } from 'vue'
import Son from "./Son.vue"
import Girl from "./Girl.vue"

// defineProps<{msg: string}>()
const showHide = ref("Son")


// v3.5 支持解构响应式了
const { count = 0, msg} = defineProps<{  count?: number , msg?: string}>()


/**
 * @author Leroy
 * 缓存的时机：
 * !1> 进入列表页后清除缓存 | 点击链接跳转前清除缓存
 * ?2> 状态管理实现缓存
 * *3> 页面弹窗实现缓存
 * todo4> 父子路由实现缓存
*/



const tabs: any = {
  Son,
  Girl
}


onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
  console.log("111");
  
})

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
  console.log("222");
  
})


</script>

<template>
  <h1>{{ msg }}</h1>
  
  A:<input type="radio" value="Son" v-model="showHide">
  B:<input type="radio" value="Girl" v-model="showHide">
  <!-- keepAlive 只能缓存动态组件的状态 -->
  <KeepAlive :include="['Girl']" :exclude="['Son']" :max="3">
    <component :is="tabs[showHide]"></component>
  </KeepAlive>
</template>

<style scoped>
</style>
