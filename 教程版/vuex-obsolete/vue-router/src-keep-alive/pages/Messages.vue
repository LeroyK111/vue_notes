<template>
  <div>
    <ul>
      <li v-for="item of messageList" :key="item.id">
        <!-- 传递params参数，就是传递路径参数 -->
        <!-- <router-link :to="`/home/messages/detail/${item.id}/${item.title}`">{{ item.title }}</router-link>
      </li> -->

        <router-link
          :to="{
            name: 'xiangqing',
            // url传参，只能用别名，不能用path
            params: {
              id: item.id,
              title: item.title,
            },
          }"
          >{{ item.title }}</router-link
        >
        <button @click="pushShow(item)">push查看</button>
        <button @click="replaceShow(item)">replace查看</button>
      </li>
    </ul>

    <hr />
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
  methods: {
    pushShow(item) {
      this.$router.push({
        name: "xiangqing",
        // url传参，只能用别名，不能用path
        params: {
          id: item.id,
          title: item.title,
        },
      });
    },
    replaceShow(item) {
      this.$router.replace({
        name: "xiangqing",
        // url传参，只能用别名，不能用path
        params: {
          id: item.id,
          title: item.title,
        },
      });
    },
  },
};
</script>

<style></style>
