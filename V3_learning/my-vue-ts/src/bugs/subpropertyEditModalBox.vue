<template>
  <NModal :show="show" class="modal" style="width: 960px;">
    <div class="main">
      <q-icon class="close" name="close" size="2.5rem" @click="closeModal"/>
      <div class="title">
        上一层字段名:<span>{{ row.modelField }}</span>
      </div>
      <div class="top">
        <q-btn label="字段" color="black" class="titlebox"></q-btn>
        <q-btn label="字段类型" color="grey" class="titlebox"></q-btn>
      </div>
      <div class="middle">
        <fieldSettingList :count="3" tip="子属性编辑字段" v-model:fieldData="fieldData"></fieldSettingList>
      </div>
      <div class="bottom">
        <n-button color="#fff" text-color="black" class="buttonSava" @click="saveData"
          >保存</n-button
        >
      </div>
    </div>
  </NModal>
</template>

<script setup>
import { NModal, NButton } from "naive-ui";
import fieldSettingList from "./fieldSettingList.vue";
import {ref} from "vue"

const props = defineProps(["show", "row"]);
const emit = defineEmits(["update:show", "update:subattribute"])

const fieldData = ref(null)

const closeModal = ()=>{
  emit("update:show", false)
}



// setp1: check fieldData
// setp2: update:subattribute
const saveData = ()=>{
  if (fieldData.value.length > 0) {
    emit("update:subattribute", props.row, fieldData.value)
  } else {
    emit("update:subattribute", props.row, '')
  }
  closeModal();
}



</script>


<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.main {
  padding: 10px 10px 0 10px;
  background-color: white;
  position: relative;

  .close {
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;

    &:hover {
      background-color: #ccc;
    }
  }

  .titlebox {
    width: 180px;
    height: 40px;
    font-size: large;
  }

  display: flex;
  flex-direction: column;

  &>div {
    margin-bottom: 10px;
  }

  .title {
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: red;
    }
  }

  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 225px;
    padding-top: 20px;
    border-top: 2px #ccc solid;

    button:nth-child(1) {
      margin-right: 5px;
    }
  }

  .middle {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
  }

  .bottom {
    display: flex;
    justify-content: center;
    align-self: center;

    .buttonSava {
      border: 2px solid #f76964;
      width: 140px;
      height: 30px;

      &:hover {
        background-color: #f76964;
      }
    }
  }
}
</style>
