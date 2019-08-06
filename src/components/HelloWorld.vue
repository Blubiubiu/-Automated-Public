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
      let config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
      };
      let userInfo = {
          id: 1
      };
      axios
        .post("https://api.11vx.cn/user",this.$qs.stringify(userInfo), config)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
