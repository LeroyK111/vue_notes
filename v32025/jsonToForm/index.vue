<template>
    <div class="box2">
      <div class="JsonEditor">
        <JsonEditor
          v-model:value="data as SchemaNode" 
          :isRoot="props.isRoot"
          @archetypeValue="(v: ArchetypeValue) => {
            cv = v;
            emit('getArchetypeValue', v);
          }"
          :isAddItem="props.isAddItem"
        />
      </div>
      <div v-if="props.preview" class="preview">
        <n-select size="tiny" v-model:value="selected" :options="selectOptions" class="select"/>
        <n-code :code="codeValue" language="json" class="code"/>
        <NButton dashed size="small" class="copyBtn" @click="handleCopy">COPY ALL</NButton>
      </div>
    </div>
</template>

<script setup lang="ts">
/**
 * @author Leroy
 * 参数专用组件
*/

import { computed, ref, toRaw, watch, watchEffect } from "vue";
import type { ArchetypeValue, SchemaNode } from './@types/schema';
import JsonEditor from "./JsonEditor.vue"
import { NCode, NButton, NSelect, useMessage } from 'naive-ui';
import {useClipboard} from "./hooks/useClipboard.ts"
const clipboard = useClipboard()
const message = useMessage()

const selected = ref("archetypeValue")
const selectOptions = [{
  label: "UI数据",
  value: "uiValue"
}, {  label: "原始数据",
  value: "archetypeValue"}]

const data = defineModel<SchemaNode | {}>({default: {
    key: "root",
    title: "参数配置",
    type: "object",
    children: []
}})
watchEffect(() => {
  if (Object.keys(data.value).length === 0) {
    data.value = {
    key: "root",
    title: "参数配置",
    type: "object",
    children: []
  }
  }
})


interface Props {
  preview?: boolean,
  isRoot?: boolean,
  isAddItem?: boolean,
}
const props = withDefaults(defineProps<Props>(), {
  preview: false,
  isRoot: true,
  isAddItem: false
});

const emit = defineEmits(["getArchetypeValue"])

const cv: ArchetypeValue = ref()

const codeValue = computed(() => {
  return selected.value === 'archetypeValue'?JSON.stringify(cv.value, null, 2)  :JSON.stringify(data.value, null, 2)
})

const handleCopy = ()=>{
  clipboard.copy(toRaw(codeValue.value))
  message.success("已复制")
}

</script>

<style scoped lang="scss">
.box2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;

  .preview {
    flex: 3;
    padding: 5px;
    padding-bottom: 10px;
    background-color: rgba($color: #000000, $alpha: .1);
    position: relative;
    overflow-y: auto;
    overflow-x: scroll;

    .code {
      height: 100%;
    }

    .select {
      width: 50%;
    }

    .copyBtn {
      position: absolute;
      top: 5px;
      right: 5px;
    }

  }

  .JsonEditor {
    flex: 7;
    overflow: auto;
  }
}
</style>