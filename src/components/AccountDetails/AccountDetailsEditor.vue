<template>
  <form>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        v-model="username"
        :placeholder="usernamePlaceholder"
        required
        ref="username"
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        v-model="name"
        :placeholder="namePlaceholder"
        required
      />
    </div>
    <div class="form-inline">
      <label for="following">
        <input
          type="checkbox"
          id="following"
          class="form-control"
          v-model="following"
        />
        Following
      </label>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      name: null,
      following: null,
    };
  },
  computed: {
    usernamePlaceholder() {
      return this.username ? this.username : "add_username";
    },
    namePlaceholder() {
      return this.name ? this.name : "add_name";
    },
  },
  methods: {
    getValue() {
      return {
        ...this.params.value,
        username: this.username,
        name: this.name,
        following: this.following,
      };
    },
    afterGuiAttached() {
      this.$refs.username.focus();
      this.$refs.username.select();
    },
  },
  created() {
    this.username = this.params.value.username;
    this.name = this.params.value.name;
    this.following = this.params.value.following;
  },
};
</script>

<style lang="scss" scoped>
@import "~/src/scss/_variables.scss";

form {
  width: 100%;
  padding: 15px 0;
}

.form-group {
  margin-bottom: 0.7rem;
}

label,
input {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  color: grey;
}

input[type="checkbox"] {
  margin-right: 10px;
}

input::placeholder {
  color: $dark-grey;
}
</style>
