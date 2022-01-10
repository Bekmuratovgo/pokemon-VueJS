<template>
  <div id="app">
    <keep-alive>
      <router-view>
        <p-main />
      </router-view>
    </keep-alive>
  </div>
</template>

<script>
import PMain from "./components/Main/p-Main.vue";

export default {
  name: "App",
  components: {
    PMain,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
