<template>
  <div class="hello">
    <button @click="getData">请求数据</button>
    <button @click="getUser">获取用户信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    getData() {
      axios({
        method: "get",
        url: "https://api.11vx.cn/test"
      });
    },
    getUser() {
        axios({
            method: "post",
            url: "https://api.11vx.cn/user",
            data: {
                id: 1
            }
        })
    }
  }
};
</script>
