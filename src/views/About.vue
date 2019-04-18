<template>
  <div class="about">
    <van-row>
      <van-col span="24">
        <van-nav-bar
          title="我的收藏"
        />
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

