<template>
  <div>
    <navbar></navbar>

    <header>
      <div class="d-flex">

        <div>
          <div>
            <img :src="getImgUrl(user.img)" :alt="user.img" class="profile">
          </div>
        </div>

        <div class="d-flex flex-column w-100">

          <div class="d-flex">
            <div class="d-flex flex-column col-10">
              <h1 class="name"><span :class="user.pref.slice(0,1)">{{ user.pref }}</span>{{ user.login }}</h1>
              <div class="d-flex flex-column">
                <label>Описание:</label>
                <span class="description">
                  {{ user.desc }}
                </span>
              </div>
            </div>
            <div class="d-flex flex-column  col-2">
              <router-link
                  :to="`/profile/${user.slug}/settings`"
                  tag="a"
                  class="material-icons no-decor_a"
              >
                settings
              </router-link>
            </div>
          </div>

          <div class="d-flex social-data mt-2">
            <span class="ml-3">{{ user.fol }} подписчиков</span>
            <span class="ml-3">{{ user.sub }} подписок</span>
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
      slug: 'SavaFeeD',
      desc: "penis is good",
      img: 'default.jpg',
      sub: 0,
      fol: 0,
      pref: 'у@'
    }
  }),
  methods: {
    getImgUrl(img) {
      let images = require.context('../../public/', false)
      return images('./' + img)
    }
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