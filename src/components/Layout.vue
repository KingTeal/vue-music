<template>
  <div class="layout">
    <van-row>
      <van-col span="24">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <van-tabbar class="wd-foot" v-model="active" active-color="#1989fa">
          <van-tabbar-item icon="home-o" @click="getHome">首页</van-tabbar-item>
          <van-tabbar-item icon="search" @click="getSearch">搜索</van-tabbar-item>
          <van-tabbar-item icon="friends-o" @click="getMyself">我</van-tabbar-item>
          <van-tabbar-item icon="setting-o" @click="getSetinfo">设置</van-tabbar-item>
        </van-tabbar>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    // HelloWorld
  },
  created() {
    this.getHome();
  },
  methods: {
    onClickLeft() {},
    onClickRight() {},
    getHome() {
      this.$router.push("/home");
    },
    getSearch() {
      this.$router.push("/search");
    },
    getMyself() {
      this.$router.push("/myself");
    },
    getSetinfo() {
      this.$router.push("/setinfo");

      // this.$router.push({ path: "/detail", query: { id: "1" } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .2s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
</style>
