<template>
  <div class="home">
    <head-view :name="'原料药生产数据分析平台'"></head-view>
    <router-view></router-view>
  </div>
</template>

<script>
import headView from "@/components/headView.vue";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
    headView,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: vw(1920);
  height: vh(1080);
  background: url(../assets/image/home_bg.png) top left no-repeat;
  background-size: 100% auto;
}
</style>
