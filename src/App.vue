<template>
  <router-view></router-view>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App"
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html,
body {
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
}
.main-panel {
  flex: 1 0 auto;
}
.footer {
  flex-shrink: 0;
}
</style>
