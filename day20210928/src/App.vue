<template>
  <div id="app">
    <img src="./assets/logo.png" @click="clickImg">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  methods: {
    clickImg() {
      console.log("点击");
      if (DEBUG) {
        // 1、在dev环境下执行、2、到了prod环境下代码会被移除
        const a = 6;
        const b = 7;
        console.log(process.env.NODE_ENV, a + b);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
