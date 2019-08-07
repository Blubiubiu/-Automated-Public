<template>
  <div class="hello">
    <button @click="getData">请求数据</button>
    <button @click="getUser">获取用户信息</button>
  </div>
</template>

<script>
import axios from "@/http/request";

export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    getData() {
      axios({
        url: "/test"
      });
    },
    getUser() {
      let userInfo = {
        id: 1
      };
      axios({
        url: "/user",
        method: "post",
        data: userInfo
      });
    }
  }
};
</script>
