<template>
  <div class="container">
    <div class="main">
      <left-view></left-view>
      <right-view></right-view>
    </div>
  </div>
</template>

<script>
import leftView from "./left/indexView.vue";
import rightView from "./right/indexView.vue";
export default {
  components: {
    leftView,
    rightView,
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: vh(82) vw(40) 0 vw(40);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
