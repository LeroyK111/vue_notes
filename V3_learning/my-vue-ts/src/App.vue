<script setup lang="ts" generic="T">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

// !引入泛型组件
defineProps<{
  items: T[]
  selected: T
}>()

// 面向宏支持类型导入和复杂类型
// defineProps<Props & { extraProp?: string }>()


// 改进 defineEmits
  const emit = defineEmits<{
  foo: [id: number]
  bar: [name: string, ...rest: any[]]
}>()


// 设置插槽内容
defineSlots<{
  default?: (props: { msg: string }) => any
  item?: (props: { id: number }) => any
}>()


// 实验性功能，解构赋值，但是不失去数据包装
// const { msg = 'hello' } = defineProps(['msg'])


// 双向绑定
const modelValue = defineModel()
console.log(modelValue.value)




</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
