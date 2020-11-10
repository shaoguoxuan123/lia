<template>
  <div class="Home">
    <main>
      <router-view></router-view>
    </main>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" to='/Home/Shou'>首页</van-tabbar-item>
      <van-tabbar-item icon="search" to='/Home/Fing'>发现</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to='/Home/Car'>购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to='/Home/My'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
}
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
html,body,.Home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
main{
  flex: 1;
  overflow: auto;
}
</style>