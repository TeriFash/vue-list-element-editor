<template>
  <button @click="$emit('clicked')">
    <font-awesome-icon icon="user-plus"></font-awesome-icon>
  </button>
</template>

<script></script>

<style lang="scss">
@import "~/src/scss/_variables.scss";

button {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  border: none;
  background: $medium-grey;

  &:hover {
    background: $light-grey;
  }

  &:active {
    outline: none;
    border: none;
    box-shadow: none;
  }

  & .svg-inline--fa {
    line-height: 26px;
    font-size: 22px;
    color: $dark-grey;
  }

  & &:active .svg-inline--fa {
    color: $active;
  }
}
</style>
