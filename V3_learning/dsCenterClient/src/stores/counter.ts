import { computed, ref, reactive } from "vue";
import { defineStore } from "pinia";




export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleKV = reactive({a: 1});
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment, doubleKV };
}, {
  persist: true,
});


export const useCounterStoreEx = defineStore("counter2", () => {
  const count = ref(0);
  const doubleKV = reactive({a: 1});
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment, doubleKV };
}, {
  persist: {
    storage: localStorage,
  },
});

