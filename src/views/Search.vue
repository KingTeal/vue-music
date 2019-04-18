<template>
  <div>
    <van-row>
      <van-col span="24">
        <van-nav-bar
          title="歌单列表"
          left-text="返回"
          right-text="按钮"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.getSongs();
  },
  methods: {
    getSongs() {
      this.$get("/songList", {
        key: 579621905,
        id: 3778678,
        limit: 100
      }).then(res => {
        console.log(res);
        // this.logining = false;
        // let { msg, code, user } = data;
        // let msg = res.returnMessage;
        // let code = Number(res.resultCode);
        // let user = res.data;
        // if (code !== 200) {
        //   this.$message({
        //     message: msg,
        //     type: "error"
        //   });
        // } else {
        //   localStorage.setItem("token", JSON.stringify(user.content.token));
        //   this.$router.push({ path: "/main" });
        // }
      });
    }
  }
};
</script>

