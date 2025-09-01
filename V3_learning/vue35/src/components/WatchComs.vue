<template>
  <div>
    <input v-model="question" placeholder="Ask a question" />
    <p>{{ answer }}</p>
  </div>
</template>

<script setup>
import { ref, watch, onWatcherCleanup } from "vue";

const question = ref("");
const answer = ref("Questions usually contain a question mark. ;-)");

// 监听 question 的变化
watch(question, (newQuestion, oldQuestion, onCleanup) => {
  if (newQuestion.includes("?")) {
    answer.value = "Thinking...";
    const timeout = setTimeout(() => {
      answer.value = "Yes";
    }, 1000);

    // 注册清理函数
    onCleanup(() => {
      console.log("类似onWatcherCleanup");
      clearTimeout(timeout);
    });
    // 一样的清理函数
    onWatcherCleanup(() => {
      console.log("类似onWatcherCleanup");
      clearTimeout(timeout);
    });
  }
});
</script>
