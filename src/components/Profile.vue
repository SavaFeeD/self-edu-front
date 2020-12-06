<template>
  <div>
    <navbar></navbar>

    <header>
      <div class="d-flex">

        <div class="mt-3 ml-3">
          <div>
            <img v-if="user.image == null" src="../../public/default.jpg" :alt="user.image" class="profile">
            <img v-else :src="user.image" :alt="user.image" class="profile">
          </div>
        </div>

        <div class="d-flex flex-column w-100">

          <div class="d-flex">
            <div class="d-flex flex-column col-10">
              <h1 class="name" v-if="user.role"><span :class="user.role.tag.slice(0,1)">{{ user.role.tag }}</span>{{ user.login }}</h1>
              <div class="d-flex flex-column">
                <label>Описание:</label>
                <span class="description">
                  {{ user.description }}
                </span>
              </div>
            </div>
            <div class="d-flex flex-column  col-2">
              <router-link
                  :to="`/profile/${user.id}/settings`"
                  tag="a"
                  class="material-icons no-decor_a"
              >
                settings
              </router-link>
            </div>
          </div>

          <div class="d-flex social-data mt-2">
            <span class="ml-3">{{ user.subs.followers }} подписчиков</span>
            <span class="ml-3">{{ user.subs.following }} подписок</span>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "Profile",
  components: {
    'navbar': NavBar
  },
  data: () => ({
    user: {
      login: 'Name',
      fio: "Гизатулин Султан Камильевич",
      id: 1,
      description: "penis is good",
      image: 'default.jpg',
      role: {
        id: 3,
        name: "Родитель",
        tag: 'у@'
      },
      subs: {
        followers: 0,
        following: 0
      },
    },
    user_auth_id: null, // ID - Авторизированного пользователя,
    user_profile: null,
    isSelfProfile: false
  }),
  async created() {
    await this.getUserProfile();
    await this.getAuthUser();
    this.user = this.$store.getters.getProfile;
    console.log(this.user)
  },
  methods: {
    getImgUrl(img) {
      let images = require.context('../../public/', false)
      return images('./' + img)
    },
    async getAuthUser(){
      const user = await fetch('http://u96872.test-handyhost.ru/self-edu-backend/public/api/user/auth', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.$store.getters.getToken}`
        },
      });
      this.user_auth_id = await user.json()
    },
    async getUserProfile(){
      const user = await fetch(`http://u96872.test-handyhost.ru/self-edu-backend/public/api/user/${this.$route.params.id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.$store.getters.getToken}`
        },
      });
      const profile = await user.json()
      this.$store.commit('setProfile', profile)
    },
  }
}
</script>

<style scoped>

header{
  padding: 66px 5px 10px 5px;
}
header h1{
  margin: 0 0 10px 0;
  font-size: 20px;
}

img.profile{
  width: 80px;
  height: 80px;
  border-radius: 100px;
}
header label{
  margin: 0;
}

.no-decor_a{
  text-decoration: none!important;
}
</style>