<template>
  <div>这是search页</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.getSongs()
  },
  methods: {
    getSongs() {
      this.$get("/songList", {
        key: 579621905,
        id: 3778678
      }).then(res => {
        console.log(res)
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

