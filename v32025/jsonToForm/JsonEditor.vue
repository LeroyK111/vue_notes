<template>
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
            <span class="field-label">
              {{ value.title }}
              <span class="field-key-sub" :title="value.key">({{ value.key }})</span>
            </span>
          </n-space>
        </template>

        <template #header-extra>
          <n-space>
            <n-popover trigger="click" placement="bottom-end" :show-arrow="false">
              <template #trigger >
                <n-button v-show="props.isAddItem" size="tiny" type="primary" dashed>+ 添加子项</n-button>
              </template>
              <div class="add-panel">
                <n-input
                  v-model:value="newItemTitle"
                  placeholder="中文标题 (Title)"
                  size="small"
                  style="margin-bottom: 8px"
                />
                <n-input
                  v-if="!isArray"
                  v-model:value="newItemKey"
                  placeholder="键名 (Key)"
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
              v-show="props.isAddItem"
            >
              删除
            </n-button>
          </n-space>
        </template>

        <n-space vertical size="small">
          <template v-if="value.children && value.children.length">
            <JsonEditor
              v-for="(childNode, index) in value.children"
              :key="index"
              :value="childNode"
              @update:value="(newVal) => updateChild(index, newVal)"
              @delete="deleteChild(index)"
              :isAddItem="props.isAddItem"
            />
          </template>
          <div v-else class="empty-tip">暂无数据</div>
        </n-space>
      </n-card>

      <div v-else class="primitive-row">
        <n-input-group>
          <n-button disabled class="label-btn" :title="value.key">
            {{ value.title }}
          </n-button>

          <div v-if="value.type === 'boolean'" class="input-wrapper checkbox-wrapper">
            <n-switch 
                :value="(value.value as boolean)" 
                @update:value="updatePrimitiveValue" 
            />
          </div>

          <n-input-number
            v-else-if="value.type === 'number'"
            v-model:value="(value.value as number)"
            @update:value="updatePrimitiveValue"
            :show-button="false"
            placeholder="请输入数值"
            class="flex-input"
          />

          <n-input
            v-else
            :value="String(value.value)"
            @update:value="updatePrimitiveValue"
            type="text"
            placeholder="请输入值"
            class="flex-input"
          />
          <n-button v-show="props.isAddItem" v-if="!isRoot" type="error" ghost @click="$emit('delete')"  >×</n-button>
        </n-input-group>
      </div>
    </div>

</template>



<script setup lang="ts">
/**
 * @author Leroy
 * 递归组件
*/
import { computed, watchEffect, ref, watch } from 'vue';
import {
  NCard, NSpace, NTag, NButton, NInput, NInputNumber,
  NSwitch, NInputGroup, NSelect, NPopover, useMessage, NCode,

} from 'naive-ui';
import type { ArchetypeValue, SchemaNode, SchemaType } from './@types/schema';
import JsonEditor from "./JsonEditor.vue"


// Props 和 Emits 定义
export interface Props {
  value: SchemaNode;
  isRoot?: boolean;
  isAddItem?: boolean;
}


const props = withDefaults(defineProps<Props>(), {
  isRoot: false,
  isAddItem: true,
});


const emit = defineEmits<{
  (e: 'update:value', value: SchemaNode): void;
  (e: 'delete'): void;
  (e: 'archetypeValue', value: ArchetypeValue): void;
}>();


function transformSchema(schema: any): any {
   
    if (Array.isArray(schema)) {
       
        if (schema.length === 0) {
             return [];
        }
        
        return schema.map(transformSchema);
    }
  
    if (typeof schema !== 'object' || schema === null || !schema.type) {
        return schema;
    }
    const { key, type, value, children } = schema;
  
    const safeChildren = children && Array.isArray(children) ? children : [];
  
    if (type === 'object') {
    
        if (safeChildren.length === 0) {
             return {};
        }
        const result: { [k: string]: any } = {};
        for (const childNode of safeChildren) {
  
            if (childNode.key) {
                result[childNode.key] = transformSchema(childNode);
            }
        }
        return result;
    } else if (type === 'array') {

        if (safeChildren.length === 0) {
             return [];
        }

        return safeChildren.map(transformSchema);
    } 
    else if (['string', 'number', 'boolean'].includes(type)) {
        return value;
    }
    return null; 
}


watchEffect(()=>{
  emit('archetypeValue', transformSchema(props.value));
})


const message = useMessage();


const newItemKey = ref<string>('');
const newItemTitle = ref<string>('');
const newItemType = ref<SchemaType>('string');

const typeOptions = [
  { label: 'String', value: 'string' },
  { label: 'Number', value: 'number' },
  { label: 'Boolean', value: 'boolean' },
  { label: 'Object', value: 'object' },
  { label: 'Array', value: 'array' }
];

const isComplex = computed(() => ['object', 'array'].includes(props.value.type));
const isArray = computed(() => props.value.type === 'array');

const updatePrimitiveValue = (val: any) => {

  const newNode: SchemaNode = { 
    ...props.value, 
    // 按节点 type 精准兜底，保证值类型和节点类型一致
    value: val ?? (
      props.value.type === 'number' ? 0 :        // number 类型兜底为 0
      props.value.type === 'boolean' ? false :   // boolean 类型兜底为 false
      ''                                         // string 类型兜底为空串
    ),
  };
  emit('update:value', newNode);
};


const updateChild = (index: number, updatedChild: SchemaNode) => {

  const newChildren = [...(props.value.children || [])];


  newChildren[index] = updatedChild;


  const newNode: SchemaNode = { 
    ...props.value, 
    children: newChildren 
  };

  
  emit('update:value', newNode);
};


const deleteChild = (index: number) => {
  if (!props.value.children) return;


  const newChildren = [...props.value.children];

 
  newChildren.splice(index, 1);


  const newNode: SchemaNode = { 
    ...props.value, 
    children: newChildren 
  };

  emit('update:value', newNode);
};


const handleAddItem = () => {
  if (!newItemTitle.value) {
    message.warning('请输入中文标题');
    return;
  }

  if (!isArray.value && !newItemKey.value) {
    message.warning('请输入 Key 名称');
    return;
  }

  if (!isArray.value && props.value.children) {
    const exists = props.value.children.some(child => child.key === newItemKey.value);
    if (exists) {
      message.error('Key 已存在');
      return;
    }
  }

  const initVal: any = (newItemType.value === 'number') ? 0 : (newItemType.value === 'boolean') ? false : '';

  const newNode: SchemaNode = {
    key: isArray.value ? (props.value.children?.length || 0).toString() : newItemKey.value,
    title: newItemTitle.value,
    type: newItemType.value,
    value: ['object', 'array'].includes(newItemType.value) ? undefined : initVal,
    children: ['object', 'array'].includes(newItemType.value) ? [] : undefined
  };


  const currentChildren = props.value.children || [];
  const newChildren = [...currentChildren, newNode];


  const updatedParentNode: SchemaNode = {
    ...props.value,
    children: newChildren,
  };


  emit('update:value', updatedParentNode);

 
  newItemKey.value = '';
  newItemTitle.value = '';
  message.success('添加成功');
};






</script>

<style scoped lang="scss">
.json-item {
  width: 100%;
}

.nested-card {
  margin-bottom: 10px;
  border-left: 4px solid transparent;
  transition: border-left-color 0.2s;
}

.field-label {
  font-weight: bold;
  font-size: 14px;
  color: #333;
}

.field-key-sub {
  font-weight: normal;
  color: #999;
  font-size: 12px;
  margin-left: 5px;
  font-family: monospace;
}

/* Primitive Row */
.primitive-row {
  margin-bottom: 8px;
}

.label-btn {
  min-width: 120px;
  background-color: #fafafa;
  color: #333;
  font-weight: 600;
  justify-content: flex-start;
  user-select: none;
  text-align: left;
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
  height: 34px;
}

.checkbox-wrapper {
  justify-content: flex-start;
}

/* Add Panel */
.add-panel {
  padding: 8px;
  min-width: 200px;
}

.empty-tip {
  color: #ccc;
  font-size: 12px;
  padding: 10px;
  text-align: center;
  border: 1px dashed #eee;
  border-radius: 4px;
}
</style>