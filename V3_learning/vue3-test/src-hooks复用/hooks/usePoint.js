import {
  reactive,
  computed,
  ref,
  watch,
  watchEffect,
  onBeforeUnmount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeMount,
  onUnmounted,
} from "vue";

export default function (params) {
  // 实例化数据
  let point = reactive({
    x: 0,
    y: 0,
  });
  // 回调方法
  function savaPoint(e) {
    point.x = e.pageX;
    point.y = e.offsetY;
    console.log(e.pageX, e.pageY);
  }
  // 生命周期
  onMounted(() => {
    window.addEventListener("click", savaPoint);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", savaPoint);
  });

  // 将处理的过的对象返回出去
  // return {point}
  // 单数据，推荐直接返回
  return point

}
