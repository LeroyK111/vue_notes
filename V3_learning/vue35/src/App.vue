<script setup lang="ts">
import { useId, watch } from "vue";

/**
 * @author Leroy

使用alien-signals构建响应式基础
import { signal, computed, effect } from 'alien-signals';

const count = signal(1);
const doubleCount = computed(() => count.get() * 2);

effect(() => {
  console.log(`Count is: ${count.get()}`);
}); // Console: Count is: 1

console.log(doubleCount.get()); // 2

count.set(2); // Console: Count is: 2

console.log(doubleCount.get()); // 4
*/

/**
 * @author Leroy
 * import { signal, effectScope } from 'alien-signals';

const count = signal(1);
const scope = effectScope();

scope.run(() => {
  effect(() => {
    console.log(`Count in scope: ${count.get()}`);
  }); // Console: Count in scope: 1

  count.set(2); // Console: Count in scope: 2
});

scope.stop();

count.set(3); // No console output
*/


// 其实原理很简单，就是调用 getCurrentInstance 这个，这个 API 会返回当前 Vue 实例的信息对象，而这个信息对象身上有一个 ids 的数组，而 useId 就是根据这个数组去生成唯一 ID 的
const id = useId();
console.log(id);
</script>

<template>
  <div>asdasd</div>
  <li>1323</li>
  <a href="https://www.google.com" target="_blank">click me</a>
  <!-- <div>{{ count }}</div> -->
  <label :for="id">名称</label>
  <input type="text" :id="id" />
</template>

<style scoped></style>
