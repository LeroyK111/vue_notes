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
              <template #trigger>
                <n-button size="tiny" type="primary" dashed>+ 添加子项</n-button>
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
            :value="(value.value as number)"
            @update:value="updatePrimitiveValue"
            :show-button="false"
            class="flex-input"
          />

          <n-input
            v-else
            :value="String(value.value)"
            @update:value="updatePrimitiveValue"
            type="text"
            class="flex-input"
          />

          <n-button v-if="!isRoot" type="error" ghost @click="$emit('delete')">×</n-button>
        </n-input-group>
      </div>
    </div>

</template>



<script setup lang="ts">
import { computed, watchEffect, ref } from 'vue';
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
}


const props = withDefaults(defineProps<Props>(), {
  isRoot: false,
});


const emit = defineEmits<{
  (e: 'update:value', value: SchemaNode): void;
  (e: 'delete'): void;
  (e: 'archetypeValue', value: ArchetypeValue): void;
}>();

// 展平
function transformSchema(schema: any): any {
    // 1. 处理数组类型 (如 children 数组)
    if (Array.isArray(schema)) {
        // 如果数组为空，返回空数组
        if (schema.length === 0) {
             return [];
        }
        // 递归处理数组中的每一项，并返回结果数组
        return schema.map(transformSchema);
    }
    // 2. 确保当前项是有效的 SchemaNode 对象
    if (typeof schema !== 'object' || schema === null || !schema.type) {
        return schema;
    }
    const { key, type, value, children } = schema;
    // 3. 定义子节点数组，若为空则设为 []
    const safeChildren = children && Array.isArray(children) ? children : [];
    // 4. 处理复杂类型节点 (Object/Array)
    if (type === 'object') {
        // 如果对象没有子节点，直接返回空对象
        if (safeChildren.length === 0) {
             return {};
        }
        const result: { [k: string]: any } = {};
        for (const childNode of safeChildren) {
            // 以子节点的 key 为键，递归处理子节点
            if (childNode.key) {
                result[childNode.key] = transformSchema(childNode);
            }
        }
        return result;
    } else if (type === 'array') {
        // 如果数组没有子节点，直接返回空数组
        if (safeChildren.length === 0) {
             return [];
        }
        // 递归调用自身来处理数组的 children (它们可能是基本类型或更复杂的结构)
        return safeChildren.map(transformSchema);
    } 
    // 5. 处理基本类型节点 (string, number, boolean)
    else if (['string', 'number', 'boolean'].includes(type)) {
        return value;
    }
    return null; 
}


watchEffect(()=>{
  emit('archetypeValue', transformSchema(props.value));
})



// 弹窗
const message = useMessage();

// 状态与计算属性
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

// 基本类型值更新 (Primitive Value)
const updatePrimitiveValue = (val: any) => {
  // 核心：创建当前节点的副本，然后修改副本的 value 字段
  const newNode: SchemaNode = { 
    ...props.value, 
    value: val ?? '', 
    // 确保 value 严格匹配 type，例如 number 总是 number
    // 这里简单处理：如果 val 是 null/undefined，用空字符串代替，避免 type 混乱
  };
  emit('update:value', newNode);
};

// 更新子节点的值 (递归调用返回)
const updateChild = (index: number, updatedChild: SchemaNode) => {
  // 1. 创建 children 数组的副本
  const newChildren = [...(props.value.children || [])];

  // 2. 在副本中替换更新后的子节点
  newChildren[index] = updatedChild;

  // 3. 创建当前节点的副本，并设置新的 children 数组
  const newNode: SchemaNode = { 
    ...props.value, 
    children: newChildren 
  };

  // 4. 发射全新的节点对象
  emit('update:value', newNode);
};

// 删除子节点 (结构性修改)
const deleteChild = (index: number) => {
  if (!props.value.children) return;

  // 1. 创建 children 数组的副本
  const newChildren = [...props.value.children];

  // 2. 在副本上执行删除操作
  newChildren.splice(index, 1);

  // 3. 创建当前节点的副本，并设置新的 children 数组
  const newNode: SchemaNode = { 
    ...props.value, 
    children: newChildren 
  };

  // 4. 发射全新的节点对象
  emit('update:value', newNode);
};

// 新增子节点 (结构性修改)
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

  // 1. 创建 children 数组的副本
  const currentChildren = props.value.children || [];
  const newChildren = [...currentChildren, newNode];

  // 2. 创建当前节点的副本，并设置新的 children 数组
  const updatedParentNode: SchemaNode = {
    ...props.value,
    children: newChildren,
  };

  // 3. 发射全新的父节点对象
  emit('update:value', updatedParentNode);

  // 重置表单状态
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