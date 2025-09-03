<script setup lang="ts">
import {ref} from "vue";
const computer = ref<number>(0)

const myWorker = new Worker(new URL('@/hooks/worker.ts', import.meta.url), {type: "module"});




console.log('主线程：任务已派发，我可以继续做别的事！');
const timer = (ms: number) => new Promise((resolve)=>setTimeout(resolve, ms))


const list = [...Array(3).keys()].map(x=> 3*(x+1))
for (const i of list) {
  myWorker.postMessage(i);
  timer(1000 * i)
}

// 监听工人发回的消息（结果）
myWorker.onmessage = function(event) {
  console.log('主线程收到工人计算结果:', event.data);
  computer.value = event.data
};

</script>

<template>
 <div>
  vue3.6 版本 新特性
  <br>
  <div>{{ computer }}</div>
  <section>
   Vapor mode
   使用真实dom构建vue项目
  </section>

 </div>
</template>

<style scoped></style>
