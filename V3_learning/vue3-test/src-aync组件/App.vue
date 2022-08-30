<template>
  <div class="app">
    <h1>我是App组件</h1>
    <!-- 使用标签控制异步组件的挂起 -->
    <Suspense>
      <template v-slot:default>
        <Child></Child>
      </template>
      <template v-slot:fallback>
        <h3>请稍等</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from "./components/Child.vue";

/*
粗略讲一讲异步组件
*/
// 引入异步组件
import { defineAsyncComponent } from "vue";
import ErrorComponent from "./components/ErrorComponent.vue";
import LoadingComponent from "./components/LoadingComponent.vue";

// 异步引入组件，加入标签Suspense控制
const Child = defineAsyncComponent(() => import("./components/Child.vue"));

// 高级异步控制，就不需要标签控制
// const AsyncChild = defineAsyncComponent({
//   // 工厂函数
//   loader: () => import("./components/Child.vue"),
//   // 加载异步组件时要使用的组件
//   loadingComponent: LoadingComponent,
//   // 加载失败时要使用的组件
//   errorComponent: ErrorComponent,
//   // 在显示 loadingComponent 之前的延迟 | 默认值：200（单位 ms）
//   delay: 200,
//   // 如果提供了 timeout ，并且加载组件的时间超过了设定值，将显示错误组件
//   // 默认值：Infinity（即永不超时，单位 ms）
//   timeout: 3000,
//   // 定义组件是否可挂起 | 默认值：true

//   // 怎么挂起，标签控制
//   suspensible: false,
//   /**
//    *
//    * @param {*} error 错误信息对象
//    * @param {*} retry 一个函数，用于指示当 promise 加载器 reject 时，加载器是否应该重试
//    * @param {*} fail  一个函数，指示加载程序结束退出
//    * @param {*} attempts 允许的最大重试次数
//    */

//   // 后面再研究
//   onError(error, retry, fail, attempts) {
//     if (error.message.match(/fetch/) && attempts <= 3) {
//       // 请求发生错误时重试，最多可尝试 3 次
//       retry();
//     } else {
//       // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
//       // 必须调用其中一个才能继续错误处理。
//       fail();
//     }
//   },
// });

export default {
  name: "App",
  components: {
    // AsyncChild,
    Child,
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
