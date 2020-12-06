<template>
    <div class="position-fixed w-100 d-flex flex-column justify-content-between">
        <nav class="nav-extended blue darken-1">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo"><img src="../assets/logo_s.png" alt="logo"></a>
            </div>
        </nav>

        <div class="nav-extended blue darken-1 down-menu">
            <div class="h-100 row nav-wrapper">
                <router-link
                        tag="a"
                        to="/"
                        class="col-3 d-flex material-icons justify-content-center align-items-center h-100"
                >
                    home
                </router-link>

                <router-link
                        tag="a"
                        to="/search"
                        class="col-3 d-flex material-icons justify-content-center align-items-center h-100"
                >
                    search
                </router-link>

                <router-link
                        tag="a"
                        to="/create-branch"
                        class="col-3 d-flex material-icons justify-content-center align-items-center h-100"
                >
                    add_box
                </router-link>

                <a @click="getAuthUser" class="col-3 d-flex material-icons justify-content-center align-items-center h-100">
                    person
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data: ()=>({
           user_id: null
        }),
        methods: {
            getAuthUser(){
                const pm = this;
                console.log(this.$store.getters.getToken);
                fetch('http://u96872.test-handyhost.ru/self-edu-backend/public/api/user/auth', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.$store.getters.getToken}`
                    },
                })  .then(res => res.json())
                    .then(res => {
                        console.log(res);
                        pm.user_id = res.id;
                        pm.$router.push('/profile/'+pm.user_id);
                    });
            }
        }
    }
</script>

<style scoped>
    a.brand-logo {
        display: flex;
        padding: 7px;
    }

    .brand-logo img {
        width: 41px;
    }

    div.down-menu {
        width: 100%;
        position: absolute;
        top: calc(100vh - 49px);
        height: 50px;
    }

    a {
        color: #fff;
    }
</style>