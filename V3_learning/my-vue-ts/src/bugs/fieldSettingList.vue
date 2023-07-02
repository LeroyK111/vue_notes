<template>
    <div class="main">
      <template v-for="i of counts" :key="i">
        <div class="fieldRow" v-if="i!==null" :style="dataList[i].selectType === 'subattribute'? {marginLeft: '145px'}:null">
          
          <!-- field name -->
          <n-input v-model:value="dataList[i].modelField" class="fieldRowSon1" type="text" size="large" placeholder="输入框文本" />
          
          <!-- field type -->
          <NSelect :clearable="true" v-model:value="dataList[i].selectType" class="fieldRowSon1" size="large" placeholder="类型选择" 
          :options="flag==='topic'?topicField:options"></NSelect>
          
          <!-- row -->
          <NInputNumber v-model:value="dataList[i].row" :min="0" class="fieldRowSon2" :show-button="false" placeholder="行" size="large">
          </NInputNumber>

          <!-- col -->
          <NInputNumber v-model:value="dataList[i].col" :min="4" class="fieldRowSon2" :show-button="false" :disabled="colDisabled" placeholder="列" size="large">
          </NInputNumber>
          
          <!-- minus button -->
          <button class="sub" @click="subField(i)"></button>
          
          <!-- extra button  -->
          <n-button @click="checkRowData(dataList[i], i)" v-show="dataList[i].selectType === 'subattribute'" class="subpropertiesEdit" size="large" text-color="black" color="#f76964" type="error">{{ tip }}</n-button>

          <!-- modal  -->
          <subpropertyEditModalBox v-if="flag !== 'topic' && modalDataShow.index === i" v-model:show="modalDataShow.show" :row="dataList[i]" @update:subattribute="updateSubattribute"></subpropertyEditModalBox>
        </div>
      </template>
      <div class="footer">
        <!-- plus button -->
        <button @click="addField" class="add"></button>
      </div>
    </div>
</template>


<script setup>
import { reactive, ref, watch  } from "vue"
import { NInput, NSelect, NInputNumber, NButton } from "naive-ui";
import useFieldOptions from "../hooks/useFieldOptions"
import subpropertyEditModalBox from "./subpropertyEditModalBox"

const {topicField, options} = useFieldOptions()
const props = defineProps(["count", "fixedCol", "tip", "flag", "fieldData"])
const emit = defineEmits(["update:fieldData"])

// uses for fixedCol
const colDisabled = ref(false)
const ifFixedCol = ()=>{
  if (props.flag === "topic") {
    colDisabled.value = true
  } 
}
ifFixedCol()
const col = colDisabled.value?props.fixedCol:null

// Input data format
const dataFormat = {
  modelField: null,
  selectType: null,
  row: null,
  col: null,
  /**
   * @author Leroy
   * 组件嵌套bug 数组和对象 会干涉
   * 不支持props连续传参，连续传参需要v-bind 裸写bool会失败
  */
  subattribute: ''
}

// fieldRow Count index
const index = ref(null)
const counts = ref(Array.from(Array(props.count), (v, k) => k))
// save dataList
const dataList = reactive([])

const addField = (e) => {
  initializeAndAddSub("addField")
  const fake = [...counts.value]
  fake.push(fake.length)
  counts.value = fake
}

const subField = (i) => {
  index.value = i
  counts.value = counts.value.map((v, k)=>k===i?null:v)
  initializeAndAddSub("subField");
}


// Dynamic list initialization assignment
const initializeAndAddSub = (flag = null) => {
  if (flag === null) {
    for (const _ of counts.value) {
      dataList.push(reactive({...dataFormat, col}))
    }
  } else if (flag === "addField") {
    // The later date
    dataList.push(reactive({...dataFormat, col}))
  } else if (flag === "subField") {
    dataList.splice(index.value, 1, null)
  }
}
initializeAndAddSub()

// modal show onoff
const modalDataShow = reactive({
  show: false,
  index: null
})

// check row data
const checkRowData = (rowData, i)=>{
  const values = Object.values(rowData)
  if (values.includes(null)) {
    alert("请将本行数据未输入完整，然后再创建子属性字段")
  } else {
    modalDataShow.show = true
    modalDataShow.index = i
  }
} 

// ! counterintuitive
const updateSubattribute = (rowData, data)=>{
  for (const iterator of data) {
    rowData.subattribute = data
  }
}

watch(dataList, (newDataList)=>{
  // There's data processing going on here  
  const fieldData = newDataList.filter((value)=> value !== null && !Object.values(value).includes(null) )
  emit("update:fieldData", fieldData)
})



</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;

  .fieldRow {
    display: flex;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .fieldRowSon1 {
      width: 180px;
      margin-right: 5px;
    }

    .fieldRowSon2 {
      width: 80px;
      margin-right: 5px;
    }

    .subpropertiesEdit {
      margin-left: 25px;

    }

    .sub {
      border-radius: 50%;
      color: white;
      background-color: #fff;
      width: 30px;
      height: 30px;
      position: relative;
      cursor: pointer;
      margin-left: 20px;
      border: solid 3px #000;


      &:hover {
        border: solid 3px #f76964;
      }


      &:hover::before {
        background-color: #f76964;
      }


      &::before {
        content: "";
        width: 15px;
        height: 3px;
        position: absolute;
        top: 50%;
        right: 50%;
        background-color: #000;
        transform: translate(50%);




      }
    }
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;

    .add {
      border: none;
      border-radius: 50%;
      color: white;
      background-color: #f76964;
      width: 60px;
      height: 60px;
      position: relative;
      cursor: pointer;



      &::after {
        content: "";
        width: 3px;
        height: 25px;
        position: absolute;
        right: 50%;
        bottom: 50%;
        background-color: #fff;
        transform: translate(50%, 50%);
      }

      &::before {
        content: "";
        width: 25px;
        height: 3px;
        position: absolute;
        top: 50%;
        right: 50%;
        background-color: #fff;
        transform: translate(50%);
      }
    }

  }

}
</style>