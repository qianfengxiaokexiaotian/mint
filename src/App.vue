<template>
  <div id="app">
    <Top/>
    <!-- <HelloWorld/> -->
    <router-view class="content"/>
      <div class="nav">
        <router-link to="./">主页</router-link>
        <router-link to="./Swiper">发现</router-link>
        <router-link to="./Shopping">订单</router-link>
        <router-link to="./Mine">我的</router-link>
      </div>
  </div>
</template>

<script>
import Top from "./components/Top";
import HelloWorld from "./components/HelloWorld";
import Swiper from "./components/Swiper";
import Shopping from "./components/Shopping";
import Mine from "./components/Mine"
import Vue from 'vue';
import Mint from 'mint-ui';

export default {
  name: "App",
  components:{
    Top,
    HelloWorld,
    Swiper,
    Shopping,
    Mine
  }
};
</script>

<style>
body,
html {
  width: 100%;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
#app {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.nav {
  height: 50px;
  line-height: 50px;
  display: flex;
  flex-direction: row;
  text-align: center;
  opacity: 0.7;
  border-top: 1px solid gray;
  background: black;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
.nav a {
  flex: 1;
}
.content {
  flex: 1;
}
</style>
