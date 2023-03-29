<template>
  <div id="app">
    <h1>vue-router开发基础模板</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/route1">路由1</router-link>|
      <router-link to="/route2">路由2</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
