<template>
    <div class="box">
      <div v-if="props.preview" class="preview">
        <n-select size="tiny" v-model:value="selected" :options="selectOptions" class="select"/>
        <n-code :code="codeValue" language="json" />
        <NButton dashed size="small" class="copyBtn" @click="handleCopy">COPY ALL</NButton>
      </div>
      <div class="JsonEditor">
        <JsonEditor
          v-model:value="data" 
          :isRoot="props.isRoot"
          @archetypeValue="(v: ArchetypeValue) => {
            cv = v;
            emit('getArchetypeValue', v);
          }"
        />
      </div>
    </div>
</template>

<script setup lang="ts">
/**
 * @author Leroy
 * 参数专用组件
*/

import { computed, ref, toRaw } from "vue";
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

const data = defineModel<SchemaNode>({default: {
    key: "parameterConfiguration",
    title: "参数配置",
    type: "object",
    children: []
}})

interface Props {
  preview?: boolean,
  isRoot?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  preview: false,
  isRoot: true
});
const emit = defineEmits(["getArchetypeValue"])

const cv: ArchetypeValue = ref()

const codeValue = computed(() => {
  return selected.value === 'archetypeValue'?JSON.stringify(cv.value, null, 2)  :JSON.stringify(data.value, null, 2)
})
// 剪切板
const handleCopy = ()=>{
  clipboard.copy(toRaw(codeValue.value))
  message.success("已复制")
}

</script>

<style scoped lang="scss">
.box {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;

  .preview {
    flex: 3;
    height: 95dvh;
    overflow: auto;
    padding: 5px;
    background-color: rgba($color: #000000, $alpha: .1);
    position: relative;

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
    height: 97dvh;
    overflow: auto;
  }
}
</style>