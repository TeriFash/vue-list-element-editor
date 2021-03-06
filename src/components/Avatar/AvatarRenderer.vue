<template>
  <div class="avatar-container">
    <img v-if="params.value" :src="params.value" />
    <div v-else class="fallback"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "~/src/scss/_variables.scss";

.avatar-container {
  position: relative;
  height: 100%;
  width: 100%;
}

img,
.fallback {
  height: 125px;
  width: 125px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(5px);
  background: $medium-grey;
}
</style>
