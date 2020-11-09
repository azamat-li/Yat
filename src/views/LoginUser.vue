<template>
  <div>
    <section>
      <form @submit.prevent="login" class="form">
        <label for="email">
          {{ $t("auth.email") }}
        </label>
        <input type="email" name="email" v-model="email" value />

        <label for="password">
          {{ $t("auth.password") }}
        </label>
        <input type="password" name="password" v-model="password" value />

        <button class="button" type="submit" name="button">
          {{ $t("auth.login") }}
        </button>
        <router-link :to="{ name: 'register' }">
          {{ $t("auth.registerSentence") }}
        </router-link>
        <p v-if="errorStatus === 401">
          {{ $t("errors.messages.401") }}
        </p>
        <p v-if="errorStatus === 500">
          {{ $t("error.messages.500") }}
        </p>
        <p>
          {{ errorStatus }}
        </p>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errorStatus: ""
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch(err => {
          this.errorStatus = err.response.status;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  @apply text-gray-900 rounded-full text-gray-800 p-2;
}

p {
  @apply text-red-400;
}
</style>
