<template>
  <div>
    <input type="text" ref="inputRef" />
    <!-- 
      <Teleport>引入了一个 defer 属性，它会在当前渲染周期之后挂载传送门， 
      延迟传送门，加 defer 属性后，则会渲染结束后传送
    
    -->
    <Teleport defer to="#container">...</Teleport>
  </div>
</template>

<script setup lang="ts">
/**
 * @author Leroy
 * v3.5 版本可以使用useTemplateRef 获取 ref 同样的效果
 * 支持动态 ref 绑定到变化的 ID
 */

import { useTemplateRef, watchEffect, ref, onWatcherCleanup, watch} from "vue";
import { onEffectCleanup } from "@vue/reactivity";
const inputRef = useTemplateRef("input");
console.log(inputRef.value);

const flag = ref(true);
/**
 * 在组件卸载之前或者下一次watchEffect回调执行之前会自动调用onEffectCleanup函数，有了这个函数后你就不需要在组件的beforeUnmount钩子函数去统一清理一些timer了。
 */
watchEffect(() => {
  if (flag.value) {
    const timer = setInterval(() => {
      //做一些事情
      console.log("dosomething");
    }, 200);
    onEffectCleanup(() => {
      clearInterval(timer);
    });
  }
});


/**
 * 和前面的onEffectCleanup函数类似，在组件卸载之前或者下一次watch回调执行之前会自动调用onWatcherCleanup函数，同样有了这个函数后你就不需要在组件的beforeUnmount钩子函数去统一清理一些timer了。
*/
watch(flag, () => {
  const timer = setInterval(() => {
    //做一些事情
    console.log("dosomething");
  }, 200);
  onWatcherCleanup(() => {
    console.log("清理定时器");
    clearInterval(timer);
  });
});
</script>

<style scoped></style>
