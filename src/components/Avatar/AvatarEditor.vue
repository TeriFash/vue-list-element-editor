<template>
  <div class="avatar-container">
    <div class="image-container">
      <img v-if="url" :src="url" />
      <div v-else class="fallback"></div>
    </div>
    <div class="backdrop" title="Upload photo" @click="backdropClickHandler">
      <span>+</span>
    </div>
    <input
      type="file"
      ref="file_upload"
      id="my_file"
      style="display: none;"
      @change="onFileLoaded"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: null,
    };
  },
  methods: {
    getValue() {
      return this.url;
    },
    backdropClickHandler() {
      this.$refs.file_upload.click();
    },
    onFileLoaded() {
      this.url = URL.createObjectURL(this.$refs.file_upload.files[0]);
    },
  },
  created() {
    this.url = this.params.value;
  },
};
</script>

<style lang="scss" scoped>
@import "~/src/scss/_variables.scss";

.avatar-container {
  position: relative;
  height: 100%;
  width: 100%;
}

img,
.fallback,
.backdrop {
  height: 125px;
  width: 125px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(5px);
}

.backdrop {
  opacity: 0.3;
  background: $medium-grey;
  cursor: pointer;
}

.backdrop:hover {
  opacity: 0.4;
  background: $light-grey;
}

.backdrop:active span {
  color: $active;
}

.backdrop span {
  font-size: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
