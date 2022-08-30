<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
/*
包装属性:
refimpl 引用实现构造函数
*/
import { ref, reactive, customRef } from "vue";

export default {
  name: "App",

  setup() {
    // 自定义Ref
    function myRef(params) {
      // console.log("---myRef---", params);

      let timer;
      // 实例化
      return customRef((track, trigger) => ({
        get() {
          console.log("有人从myRef中读取了内容");
          // 通知vue追踪改变
          track();
          return params;
        },
        set(newvalue) {
          // 防抖
          clearTimeout(timer);
          console.log("有人修改myRef中的数据");
          // 赋值
          params = newvalue;
          // 通知vue重新解析模板
          timer = setTimeout(() => {
            trigger();
          }, 1000);
        },
      }));
    }

    // 使用ref提供的内置ref
    // let keyWord = ref("hello")

    // 使用自定义ref
    let keyWord = myRef("hello");

    return {
      keyWord,
    };
  },
};
</script>

<style></style>
