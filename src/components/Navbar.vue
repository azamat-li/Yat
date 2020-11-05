<template>
    <div id="nav" class="rounded-full"> 
<section >
    <template v-if="user" >
       <router-link to="dashboard"> 
           {{ $t('dashboard') }}
       </router-link>

        <span class="nav-welcome"> Welcome, {{ user.name}}.</span>
        <button type="button" class="logoutButton btn" @click="logout">
            {{ $t('auth.logout') }}
        </button>

    </template>


    <template v-else>
            <router-link to="login" class="btn">
                {{ $t('auth.login') }}
            </router-link>
            <router-link to="register" class="btn">
               {{ $t('auth.register') }} 
            </router-link>
    </template>
</section>

    </div>
</template>

<script>
    export default {
        computed: {
            user() {
                return this.$store.state.user
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
            }
        }
    }
</script>

<style lang="scss" scoped>
#nav {
    display: flex;
    align-items: center;
    min-height: 50px;
    padding: 0.2em 1em;
    background: linear-gradient(to right, #16c0b0, #84cf6a)
}

.nav-welcome {
    margin-left: auto;
    margin-right: 1rem;
    color: white;
}

a {
    font-weight: bold;
    color: #2c3e50;
    margin: auto 0.8em auto 0.4em;
    text-decoration: none;
    border-top: 2px solid transparent;
}

.router-lint-exact-active {
    color: white;
    border-bottom: 2px solid #fff;
}

button,
.btn {
    margin-left: auto;
    background: white;
    text-decoration: none ;
    color:  #2c3e50;
    @apply rounded-full p-1 m-1;
     
     &.router-link-active {
         color: #2c3e50;
     }
}

.logoutButton {
    cursor: pointer;
}

.nav-welcome + button {
    margin-left: 0;
}
</style>