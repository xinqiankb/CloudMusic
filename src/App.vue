<template>
  <div id="app">
    <transition keep-alive>
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    transitionName: 'slide-left'
  })
}
</script>

<style lang="scss" scoped>
@import 'assets/icon/iconfont.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  max-width: 768px;
  overflow-x: hidden; 
  height: 100%;
  margin: 0 auto;
  position: relative;
}
</style>
