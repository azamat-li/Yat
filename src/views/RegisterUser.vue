<template>
    <div >
        <form class="form" @submit.prevent="register">
            <label for="name">
            {{ $t('auth.name')  }}  
            </label>
            <input   v-model="name" type="text" name="name" value>

            <label for="email">
                {{ $t('auth.email') }} 
            </label>
                    <input v-model="email" type="email" name="email" value>

            <label for="password">
                {{ $t('auth.password') }}
                </label>
                    <input v-model="password" type="password" name value>

                <button class="button" type="submit" name="button">
                     {{ $t('auth.submit') }}  
                </button>
                <router-link :to="{name: 'login'}">
                    {{ $t('auth.loginSentence')}}
                </router-link>
                    <p
                        class="text-red-400"
                    >
                        {{ errorStatus}}
                    </p>
                    <div
                        class="text-red-400"
                    >
                    <div v-for="(err, errIndex) of errorsCollected" 
                    :key="errIndex"
                    >
                            <div v-if="err==='EmailAlreadyUsed'" >
                                {{ $t('auth.register.EmailAlreadyUsed') }}
                            </div>
                            <div v-if="err==='PasswordLessThen6'">
                                {{ $t('auth.register.PasswordLessThen6') }}
                            </div>
                    </div>
                    </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
                errorStatus: '',
                errorsCollected: null
        }
    },
    methods:  {
        register(){
            this.$store.dispatch('register', {
                name: this.name,
                email: this.email,
                password: this.password
            }).then(() => {
                    this.$router.push({name: 'dashboard'})
            }).catch(err => {
                this.errorStatus = err.response.status
                this.errorsCollected = err.response.data.errors
            })
        }
    }
    }
</script>

<style lang="scss" scoped>
input {
  @apply text-gray-900 rounded-full text-gray-800 p-2;
}
</style>