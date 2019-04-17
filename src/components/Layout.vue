<template>
  <div class="layout">
    <van-row>
      <van-col span="24">
        <van-nav-bar
          title="标题"
          left-text="返回"
          right-text="按钮"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <van-tabbar v-model="active" active-color="#1989fa">
          <van-tabbar-item icon="home-o" @click="getHome">首页</van-tabbar-item>
          <van-tabbar-item icon="search" @click="getSearch">查询</van-tabbar-item>
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
  name: "home",
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
