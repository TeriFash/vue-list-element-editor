<template>
  <div>
    <h2>
      {{ params.value.username }}
      <img
        v-if="params.value.verified"
        src="/assets/img/badge-with-check-mark.png"
      />
    </h2>
    <p>
      {{ params.value.name }}
      {{ params.value.following ? `・ Following` : null }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "~/src/scss/_variables.scss";

h2 {
  font-size: 24px;
  margin: 5px 0;
  font-weight: 500;
  position: relative;
}

h2 img {
  position: inherit;
  top: 3px;
  left: inherit;
  transform: unset;
  width: 20px;
  height: auto;
}

p {
  font-size: 17px;
  color: $dark-grey;
}
</style>
