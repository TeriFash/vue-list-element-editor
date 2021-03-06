<template>
  <div class="actions-container">
    <span class="action" @click="stopEditing(false)">
      <font-awesome-icon icon="check"></font-awesome-icon>
    </span>
    <span class="action" @click="stopEditing(true)">
      <font-awesome-icon icon="times"></font-awesome-icon>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // getValue(params) {
      //   return null;
      // },
    };
  },
  mthods: {
    stopEditing(bool) {
      this.params.api.stopEditing(bool);
    },
  },
};
</script>

<style lang="scss">
@import "~/src/scss/_variables.scss";

.actions-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.action {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  // color: $dark-grey;
  margin: 0 5px;
  font-size: 22px;
  display: flex;
}

.action:hover,
.action:hover {
  background: $light-grey;
}

.action:active {
  color: $active;
}
</style>
