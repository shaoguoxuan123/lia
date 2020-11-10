<template>
  <div class="Shou">
    <header>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </header>
    <main>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <van-tabs v-model="active">
        <van-tab title="科幻故事">
          <van-card
            v-for='(item) in list'
            :key = 'item.id'
            :name='item.name'
          />
        </van-tab>
        <van-tab title="国学经典">国学经典</van-tab>
        <van-tab title="著名书籍">著名书籍</van-tab>
        <van-tab title="历史地理">历史地理</van-tab>
      </van-tabs>
    </main>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data() {
    return {
      value: "",
      active: 0,
    };
  },
  created(){
    Axios.get('/getShopList').then(data=>{
      this.list = data.data.data
    }).catch(error=>[
      console.log(error)
    ])
  }
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
html,
body,
.shou {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
  overflow: auto;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>