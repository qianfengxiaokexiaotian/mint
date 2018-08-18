<template>
  <div class="top">
      
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {};
  }
};
</script>


<style scoped>
.top{
    position:fixed;
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    line-height: 50px;
    z-index: 999;
    background: gray;
    opacity: 0.5;
}
</style>