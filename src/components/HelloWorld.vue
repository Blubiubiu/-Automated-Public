<template>
  <div class="hello">
    <button @click="getData">请求数据</button>
    <button @click="getUser">获取用户信息</button>
    111
    <button @click="print">打印测试</button>
    <section ref="print">
      <h1 class="h1">红色粗体</h1>
      <h2 class="h2">左右40px</h2>
      打印内容
      <div class="no-print">不要打印我</div>
    </section>
  </div>
</template>

<script>

import axios from "@/http/request";
import Print from './print'
Vue.use(Print) // 注册
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
    print(){
      this.$print(this.$refs.print)
    },
    // printHtmlCss() {
    //   printJS({
    //     printable: 'test',
    //     type: 'html',
    //     css: 'test.css',
    //     scanStyles: false
    //   })
    // },
    getUser() {
      let userInfo = {
        id: 1
      };

      const getCourseAuditionList = (...rest) => {
        return axios({
          url: "/user",
          method: "post",
          ...rest
        });
      };

      getCourseAuditionList(userInfo)
    }
  }
};
</script>
<style>
  .h1{
    background: blue;

  }
  .h2{
    margin-left: 40px;
  }
</style>