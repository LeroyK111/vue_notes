<template lang="">
  <div>
    <input v-model="modelValue" />
  </div>
</template>


<!-- 3.3新特性 -->
<script setup lang="ts">
// vue3.3特性，接口传参写法
import type { Props } from './foo'
import {toRef, toRefs, toValue} from "vue"


// imported + intersection type
// 现在传参过来，具有响应式
const {extraProp = "111"} = defineProps<Props & { extraProp?: string }>(["extraProp"])

// 新api，可以直接获取双向绑定的结果
const modelValue = defineModel()
console.log(modelValue.value)

// 新api，直接声明组件的内容
defineOptions({ inheritAttrs: false })

// 相当于 ref(1)
toRef(1)
// 创建一个 readonly ref，在 .value 访问时调用 getter
toRef(() => props.foo)
// 按原样返回现有 refs
toRef(existingRef)

// 新api解除响应式
toValue(1) //       --> 1
toValue(ref(1)) //  --> 1
toValue(() => 1) // --> 1

</script>

<!-- 3.3新特性 -->
<script setup lang="ts" generic="T">
defineProps<{
  items: T[]
  selected: T
}>()
</script>


<!-- 3.3新特性 -->
<script setup lang="ts" generic="T extends string | number, U extends Item">
import type { Item } from './types'
defineProps<{
  id: T
  list: U[]
}>()

// 新的事件传递
const emit = defineEmits<{
  foo: [id: number]
  bar: [name: string, ...rest: any[]]
}>()


// 新插槽
defineSlots<{
  default?: (props: { msg: string }) => any
  item?: (props: { id: number }) => any
}>()




</script>




<style lang="css" scoped>
  
</style>