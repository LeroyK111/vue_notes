<template>
  <div>
    <ul>
      <li v-for="item of messageList" :key="item.id">
      <!-- 老写法，跳转路由携带get参数，用:和`` -->
        <!-- <router-link :to="`/home/messages/detail?id=${item.id}&title=${item.title}`">{{ item.title }}</router-link> -->

      <!-- 推荐这种传参方式 -->
        <router-link 
        :to="{
          name:'xiangqing',
          // path:'/home/messages/detail',
          query:{
            id:item.id,
            title:item.title
          }
        }"
        >
        {{item.title}}
        </router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Messages",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息一" },
        { id: "002", title: "消息二" },
        { id: "003", title: "消息三" },
      ],
    };
  },
};
</script>

<style></style>
