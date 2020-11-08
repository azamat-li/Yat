<template>
  <div>
    <DefaultTemp>
      <template v-if="notLoggedIn">
        <div class="p-10 m-10">
          <h1>{{ $t("home.status") }}</h1>
          <div>
            {{ $t("home.message") }}
          </div>
          <button type="button" class="button inline-block" @click="login">
            {{ $t("auth.login") }}
          </button>
          {{ $t("or") }}
          <button type="button" class="button inline-block" @click="register">
            {{ $t("auth.register.register") }}
          </button>
        </div>
      </template>
    </DefaultTemp>
  </div>
</template>

<script>
import DefaultTemp from "@/templates/DefaultTemp";

import { authComputed } from "@/store/helpers";
export default {
  components: {
    DefaultTemp
  },
  computed: {
    notLoggedIn() {
      return !this.loggedIn;
    }
  },
  methods: {
    login() {
      this.$router.push({ name: "login" });
    },
    register() {
      this.$router.push({ name: "register" });
    }
  }
};
</script>

<style lang="scss" scoped>
.button,
button {
  @apply p-2 m-3;
}
</style>
