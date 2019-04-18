<template>
  <div>
    <van-row class="wd-top">
      <van-col span="22">
        <van-search placeholder="请输入搜索关键词" v-model="value"/>
      </van-col>
      <van-col span="2">
        <van-icon name="service-o" class="wd-css"/>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <van-swipe @change="onChange" :autoplay="3000" loop>
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image" style="height: 200px">
          </van-swipe-item>
        </van-swipe>
      </van-col>
    </van-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      active: 0,
      value: "",
      current: 0,
      images: [
        require("../assets/bg1.jpg"),
        require("../assets/bg2.jpg"),
        require("../assets/bg3.jpg"),
        require("../assets/bg4.jpg"),
        require("../assets/bg5.jpg")
      ]
    };
  },
  components: {
    // HelloWorld
  },
  methods: {
    onClickLeft() {},
    onClickRight() {},
    getHome() {},
    onChange(index) {
      this.current = index;
    }
  }
};
</script>

<style lang="less" scoped>
.wd-top {
  background-color: rgb(240, 11, 11) !important;
}
// 覆盖框架自带背景色
.van-search {
  background-color: rgb(240, 11, 11) !important;
}
.wd-css {
  line-height: 54px;
  font-weight: 700;
  cursor: pointer;
}
</style>

