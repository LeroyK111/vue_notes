<template>
  <div class="box">
    <div v-if="props.preview" class="preview">
      <n-code :code="JSON.stringify(props.value, null, 4)" language="json" />
    </div>
    <div class="json-item">
    <n-card 
      v-if="isComplex" 
      size="small" 
      class="nested-card"
      :style="{ borderColor: isArray ? '#2080f0' : '#18a058' }"
    >
      <template #header>
        <n-space align="center">
          <n-tag :type="isArray ? 'info' : 'success'" size="small">
            {{ isArray ? 'Array' : 'Object' }}
          </n-tag>
          <span class="field-label">{{ fieldKey }}</span>
        </n-space>
      </template>

      <template #header-extra>
        <n-space>
          <n-popover trigger="click" placement="bottom-end" :show-arrow="false">
            <template #trigger>
              <n-button size="tiny" type="primary" dashed>+ 添加子项</n-button>
            </template>
            <div class="add-panel">
              <n-input 
                v-if="!isArray" 
                v-model:value="newItemKey" 
                placeholder="Key名称" 
                size="small" 
                style="margin-bottom: 8px"
              />
              <n-select 
                v-model:value="newItemType" 
                :options="typeOptions" 
                size="small" 
                style="margin-bottom: 8px"
              />
              <n-button block type="primary" size="small" @click="handleAddItem">确认添加</n-button>
            </div>
          </n-popover>

          <n-button 
            v-if="!isRoot" 
            size="tiny" 
            type="error" 
            ghost 
            @click="$emit('delete')"
          >
            删除
          </n-button>
        </n-space>
      </template>

      <n-space vertical size="small">
        <template v-if="isArray">
          <JsonEditor
            v-for="(item, index) in (value as JsonArray)"
            :key="index"
            :field-key="`Index [${index}]`"
            :value="item"
            @update:value="(val: any) => updateChild(index, val)"
            @delete="deleteChild(index)"
          />
        </template>
        <template v-else>
          <JsonEditor
            v-for="(subVal, subKey) in (value as JsonObject)"
            :key="subKey"
            :field-key="String(subKey)"
            :value="subVal"
            @update:value="(val: any) => updateChild(subKey, val)"
            @delete="deleteChild(subKey)"
          />
        </template>
        <div v-if="isEmpty" class="empty-tip">暂无数据</div>
      </n-space>
    </n-card>

    <div v-else class="primitive-row">
      <n-input-group>
        <n-button disabled class="label-btn">{{ fieldKey }}</n-button>

        <div v-if="paramType === 'boolean'" class="input-wrapper checkbox-wrapper">
          <n-switch :value="(value as boolean)" @update:value="emitUpdate" />
        </div>

        <n-input-number 
          v-else-if="paramType === 'number'" 
          :value="(value as number)" 
          @update:value="emitUpdate"
          :show-button="false"
          class="flex-input"
        />

        <n-input 
          v-else 
          :value="String(value)" 
          @update:value="emitUpdate" 
          type="text" 
          class="flex-input"
        />

        <n-button v-if="!isRoot" type="error" ghost @click="$emit('delete')">×</n-button>
      </n-input-group>
    </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { 
  NCard, NSpace, NTag, NButton, NInput, NInputNumber, 
  NSwitch, NInputGroup, NSelect, NPopover, useMessage, NCode 
} from 'naive-ui';
// 递归组件需要导入自身，但在 Vue 3 setup 模式下通常自动处理。这里显式导入以满足 TS 检查。
// @ts-ignore
import JsonEditor from './JsonEditor.vue'; 
import type { JsonValue, JsonObject, JsonArray } from '@/@types/schema';
// 1. Props 和 Emits 的 TypeScript 定义
interface Props {
  value: JsonValue;
  fieldKey: string;
  isRoot?: boolean;
  preview?: boolean
}

/**
 * @author Leroy
 * 支持 value = {}
*/

const props = withDefaults(defineProps<Props>(), {
    isRoot: false,
    preview: false
});

const emit = defineEmits<{
    (e: 'update:value', value: JsonValue): void;
    (e: 'delete'): void;
}>();

const message = useMessage();

// 2. 状态与计算属性
type JsonType = 'string' | 'number' | 'boolean' | 'object' | 'array';
const newItemKey = ref<string>('');

const newItemType = ref<JsonType>('string');
const typeOptions = [
  { label: 'String', value: 'string' },
  { label: 'Number', value: 'number' },
  { label: 'Boolean', value: 'boolean' },
  { label: 'Object', value: 'object' },
  { label: 'Array', value: 'array' }
];

const isComplex = computed(() => props.value !== null && typeof props.value === 'object');
const isArray = computed(() => Array.isArray(props.value));
const isEmpty = computed(() => {
  if (!isComplex.value) return false;
  return isArray.value ? (props.value as JsonArray).length === 0 : Object.keys(props.value as JsonObject).length === 0;
});
const paramType = computed(() => typeof props.value);


// 3. 更新子节点的值 (非结构性修改)
const updateChild = (key: string | number, val: JsonValue) => {
    // 由于 props.value 是响应式对象的引用，直接修改其属性即可触发更新。
    if (isArray.value) {
        (props.value as JsonArray)[key as number] = val;
    } else {
        (props.value as JsonObject)[key as string] = val;
    }
};

// 4. 删除子节点 (结构性修改)
const deleteChild = (key: string | number) => {
    if (isArray.value) {
        (props.value as JsonArray).splice(key as number, 1);
    } else {
        delete (props.value as JsonObject)[key as string];
    }
};

// 5. 新增子节点 (结构性修改)
const handleAddItem = () => {
    let initVal: JsonValue;
    switch (newItemType.value) {
        case 'number': initVal = 0; break;
        case 'boolean': initVal = false; break;
        case 'object': initVal = {}; break;
        case 'array': initVal = []; break;
        default: initVal = '';
    }
    if (isArray.value) {
        (props.value as JsonArray).push(initVal);
    } else {
        if (!newItemKey.value) {
            message.warning('请输入 Key 名称');
            return;
        } 
        if (Object.prototype.hasOwnProperty.call(props.value, newItemKey.value)) {
            message.error('Key 已存在');
            return;
        }
        (props.value as JsonObject)[newItemKey.value] = initVal;
    }
    newItemKey.value = '';
    message.success('添加成功');
};


// 6. 基本类型更新
const emitUpdate = (val: JsonValue) => {
    emit('update:value', val);
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  display: flex;

  .preview {}


  .json-item {}

  .nested-card {
    margin-bottom: 10px;
    border-left: 4px solid transparent;
    transition: border-left-color 0.2s;
  }

  .field-label {
    font-weight: bold;
    font-family: monospace;
  }

  /* Primitive Row */
  .primitive-row {
    margin-bottom: 8px;
  }



  .label-btn {
    min-width: 100px;
    background-color: #fafafa;
    color: #666;
    font-weight: 600;
    justify-content: flex-start;
    user-select: none;
  }

  .flex-input {
    flex: 1;
    text-align: left;
  }

  .input-wrapper {
    border: 1px solid rgb(224, 224, 230);
    background-color: #fff;
    padding: 0 12px;
    display: flex;
    align-items: center;
    flex: 1;
  }

  .checkbox-wrapper {
    justify-content: flex-start;
  }

  /* Add Panel */
  .add-panel {
    padding: 8px;
    min-width: 150px;
  }

  .empty-tip {
    color: #ccc;
    font-size: 12px;
    padding: 10px;
    text-align: center;
    border: 1px dashed #eee;
    border-radius: 4px;
  }
}
</style>