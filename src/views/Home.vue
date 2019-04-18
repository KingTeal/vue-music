<template>
  <div class="home">
    <van-row class="wd-top">
      <van-col span="22">
        <van-search placeholder="请输入搜索关键词" v-model="value"/>
      </van-col>
      <van-col span="2">
        <van-icon class="wd-css" name="service-o"  @click="getSongLists"/>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <div class="wd-top wd-swipe">
          <van-swipe class="wd-swipe-wrap" @change="onChange" :autoplay="3000" loop>
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img class="wd-image" :src="image">
            </van-swipe-item>
          </van-swipe>
        </div>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <ul class="clearfix wd-tab">
          <li class="wd-tab-wrap" v-for="(img, index) in tabList" :key="index">
            <img class="wd-tab-pic" :src="img.url" alt>
            <p>{{ img.text }}</p>
          </li>
        </ul>
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
      ],
      tabList: [
        { url: require("../assets/tab1.jpg"), text: "私人" },
        { url: require("../assets/tab2.jpg"), text: "每日" },
        { url: require("../assets/tab3.jpg"), text: "歌单" },
        { url: require("../assets/tab4.jpg"), text: "排行" }
      ]
    };
  },
  components: {
    // HelloWorld
  },
  methods: {
    getSongLists() {

    },
    getHome() {},
    onChange(index) {
      this.current = index;
    }
  }
};
</script>

<style lang="less" scoped>
.wd-top {
  background-color: rgb(207, 18, 18) !important;
}
// 覆盖框架自带背景色
.van-search {
  background-color: rgb(207, 18, 18) !important;
}
.wd-css {
  line-height: 54px;
  font-weight: 700;
  cursor: pointer;
}

.wd-swipe,
.wd-image {
  width: 100%;
  height: 170px;
}

.wd-swipe-wrap {
  width: 100%;
  height: 100%;
}

.wd-tab {
  height: 100%;
  border-bottom: 1px solid #f2f2f2;
  .wd-tab-wrap {
    width: 25%;
    float: left;
    padding: 10px 0;
    text-align: center;
    box-sizing: border-box;
    .wd-tab-pic {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    p {
      padding: 5px 0;
      margin: 0;
      font-size: 12px;
    }
  }
}
</style>

