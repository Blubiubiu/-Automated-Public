<template>
  <div class="hello">
    <button @click="getData">请求数据</button>
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
        url: "https://api./test",
        headers: {'X-Requested-With': 'XMLHttpRequest'},
      });
    }
  }
};
</script>
