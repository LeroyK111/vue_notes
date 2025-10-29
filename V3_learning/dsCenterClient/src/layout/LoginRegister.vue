<template>
  <div>
    <button @click="increment">点我1</button>
    <button @click="()=>{
      incrementEx()
    }">点我2</button>

  </div>
</template>

<script setup lang="ts">
import {useCounterStore, useCounterStoreEx} from '@/stores/counter';

const counterStore = useCounterStore();
console.log('counterStore count:', counterStore.count);

const increment = ()=>{
  counterStore.increment();
  console.log("counterStore count:", counterStore.count);
}


const counterStoreEx = useCounterStoreEx();
console.log('counterStoreEx count:', counterStoreEx.count);
const incrementEx = ()=>{
  counterStoreEx.increment();
  console.log("counterStoreEx count:", counterStoreEx.count);
}


</script>

<style scoped>

</style>