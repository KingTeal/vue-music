<template>
  <div class="detail">
    <van-row>
      <van-col span="24">
        <van-nav-bar class="wd-top" title="歌曲列表" left-arrow @click-left="onClickLeft"/>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <div class="song-top">
          <img class="song-pic" :src="songListPic" alt>
          <span>{{ songsText }}</span>
        </div>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <div class="song-playall">
          播放全部&nbsp;
          <span class="song-totle" v-show="songListCount">(共{{ songListCount }}首)</span>
        </div>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <div class="song-loading" v-show="showLoading">
          <van-loading type="spinner"/>
        </div>
        <ul class="songs-wrap">
          <li class="clearfix" v-for="(item, index) in songsLists" :key="index">
            <div class="songs-left fl">
              <img :src="item.pic" alt>
              <span class="song-name" :title="item.name">{{ item.name }}</span>
              <span class="song-author" :title="item.singer">{{ item.singer }}</span>
            </div>

            <div class="songs-right fr"></div>
          </li>
        </ul>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  data() {
    return {
      songListPic: "",
      songsLists: "",
      songsText: "",
      songListCount: "",
      showLoading: false
    };
  },
  created() {
    this.getDetailSonglis();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 获取歌单详情getsinglesongs
    getDetailSonglis() {
      this.showLoading = true;
      let id = this.$route.query.id;
      this.$api
        .getsinglesongs({
          key: 579621905,
          id: id
        })
        .then(res => {
          this.showLoading = false;
          let code = res.code,
            result = res.result,
            songsUrl = res.data.songListPic,
            songListDes = res.data.songListDescription,
            songsText = res.data.songListName,
            songListCount = res.data.songListCount,
            songsList = res.data.songs;
          if (code === 200 && result === "SUCCESS") {
            this.songListPic = songsUrl;
            this.songsLists = songsList;
            this.songListCount = songListCount;
            this.songsText = songsText;
          } else {

          }
        }).catch(res => {
          this.showLoading = false;
        });
    }
  }
};
</script>

<style lang="less" scoped>
.wd-top {
  background-color: rgb(207, 18, 18) !important;
}
.van-nav-bar__title,
.van-nav-bar .van-icon {
  color: #fff;
}

.song-top {
  position: relative;
  width: 100%;
  height: 150px;
  background-color: rgb(40, 40, 40);
  .song-pic {
    width: 100px;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  span {
    width: 50%;
    position: absolute;
    color: #fff;
    top: 30px;
    right: 10%;
  }
}

.song-playall {
  font-size: 15px;
  font-weight: 700;
  padding: 10px 5px 10px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #f2f2f2;
  .song-totle {
    position: relative;
    font-size: 12px;
    color: #888;
    bottom: 1px;
  }
}

.song-loading {
  width: 100%;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  .van-loading {
    display: inline-block;
  }
}

.songs-wrap {
  li {
    padding: 5px 10px;
    border-bottom: 1px solid #f2f2f2;
    .songs-left {
      position: relative;
      width: 60%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      img {
        width: 40px;
        vertical-align: top;
      }
      .song-name {
        font-size: 15px;
        margin-left: 10px;
        font-weight: 700;
      }
      .song-author {
        font-size: 10px;
        margin-left: 10px;
        position: absolute;
        left: 40px;
        bottom: 0;
      }
    }
  }
}
</style>
