<template>
  <div class="home">
    <van-row class="wd-top">
      <van-col span="22">
        <van-search placeholder="请输入搜索关键词" v-model="value" @click="getQualitySongList"/>
      </van-col>
      <van-col span="2">
        <van-icon class="wd-css" name="service-o" @click="getHotSongs"/>
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

    <van-row>
      <van-col span="24">
        <div class="clearfix">
          <h5 class="wd-songs fl">热门歌单 ></h5>
          <h5 class="wd-songs fr">更多>></h5>
        </div>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <ul class="wd-hotsong-wrap clearfix">
          <li
            class="wd-hotsong-item"
            v-for="(imgs, index) in hotSongList"
            :key="index"
            @click="toSongDetail(imgs)"
          >
            <img :src="imgs.coverImgUrl" alt>
            <p>{{ imgs.title }}</p>
          </li>
        </ul>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <div class="clearfix">
          <h5 class="wd-songs fl">精品歌单 ></h5>
          <h5 class="wd-songs fr">更多>></h5>
        </div>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <ul class="wd-hotsong-wrap clearfix" style="margin-bottom: 50px">
          <li class="wd-hotsong-item" v-for="(imgs, index) in qualitySongList" :key="index">
            <img :src="imgs.coverImgUrl" alt>
            <p>{{ imgs.title }}</p>
          </li>
        </ul>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { constants } from "crypto";
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
      ],
      // 热门歌单
      hotSongList: [
        // { url: require("../assets/song1.jpg"), des: "City pop | 脱丧俱乐部里的复古蜜色" },
        // { url: require("../assets/song2.jpg"), des: "民谣 |岁月缱绻时光愿你依旧从前模样"},
        // { url: require("../assets/song3.jpg"), des: "晚安，听完这首男友音我就睡了" },
        // { url: require("../assets/song4.jpg"), des: "当你一个人熬过了所有得苦" },
        // { url: require("../assets/song5.jpg"), des: "经典老歌，久听不厌" },
        // { url: require("../assets/song6.jpg"), des: "【ink扯天扯地】这就是心痛的感觉……" },
        // { url: require("../assets/song7.jpg"), des: "空灵民谣 | 游走于冰点的旷久孤寂" },
        // { url: require("../assets/song8.jpg"), des: "心如止水" },
      ],
      // 精品歌单
      qualitySongList: []
    };
  },
  components: {
    // HelloWorld
  },
  created() {
    this.getHotSongs();
    // this.getQualitySongList();
  },
  methods: {
    // 获取分类歌单
    getSongLists() {
      this.$get("/songListCategory", {
        key: 579621905
      }).then(res => {});
    },

    // 初始化获取热门歌单默认9个
    getHotSongs() {
      this.$api
        .gethotsong({
          key: 579621905,
          limit: 9
        })
        .then(res => {
          let { code, data, result } = res;
          if (code === 200 && result === "SUCCESS") {
            this.hotSongList = data;
          } else {
          }
        });
    },
    // 获取精品歌单默认9个
    getQualitySongList() {
      this.$api
        .getgoodsonglist({
          key: 579621905,
          limit: 9
        })
        .then(res => {
          let { code, data, result } = res;
          if (code === 200 && result === "SUCCESS") {
            this.qualitySongList = data.playlists;
          } else {
          }
        });
    },

    toSongDetail(id) {
      this.$router.push({ path: "/detail", query: { id: id.id } });
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

.wd-songs {
  margin: 10px;
}

.wd-hotsong-wrap {
  // margin-bottom: 50px;
  border-bottom: 1px solid #f2f2f2;
  .wd-hotsong-item {
    float: left;
    width: 33%;
    height: 165px;
    text-align: center;
    padding: 2px 5px;
    box-sizing: border-box;
    img {
      width: 95%;
    }
    p {
      margin: 0px;
      font-size: 12px;
      text-align: left;
    }
  }
}
</style>

