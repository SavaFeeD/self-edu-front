<template>
  <div>
    <navbar></navbar>

    <main>
      <div class="d-flex flex-column align-items-center">

        <div class="position-relative wrap-edit_img mt-5">
          <label for="img_profile" class="edit_img">
            <img :src="getImgUrl(user.img)" alt="user.img" class="profile" />
          </label>
          <input id="img_profile" type="file" class="hidden_file" @change="newAvatar">
        </div>
      </div>

      <div class="d-flex flex-column align-items-center mt-5 menu">
        <router-link
          tag="a"
          :to="`/profile/${user.slug}/edit`"
          class="mt-3"
        >
          Редактировать профиль
        </router-link>
        <router-link
            tag="a"
            :to="`/profile/${user.slug}/delete`"
            class="red-text text-darken-4 mt-3"
        >
          Удалить профиль
        </router-link>
        <a class="red-text text-darken-4 mt-3" @click="logout">
          Выйти
        </a>

      </div>

    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "Settings",
  data: () => ({
    user: {
      login: 'Name',
      slug: 'SavaFeeD',
      desc: "penis is good",
      img: 'default.jpg',
      sub: 0,
      fol: 0,
      pref: 'у@'
    },
    img_file: ''
  }),
  components: {
    'navbar': NavBar
  },
  methods: {
    getImgUrl(img) {
      let images = require.context('../../public/', false)
      return images('./' + img)
    },
    newAvatar(e) {
      this.img_file = e.target.files[0];
      console.log(this.img_file)
    },
    logout(){
      // const pm = this;
      console.log(this.$store.getters.getToken);
      fetch('http://u96872.test-handyhost.ru/self-edu-backend/public/api/logout', {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.$store.getters.getToken}`
        },
      }).then(res => {
        console.log(res);
        if(res.status === 204){
            this.$store.commit('deleteToken');
            this.$router.push('/auth');
        }else {
          return res.json();
        }
      })
        .then(res => {
          console.log(res);
         });
    }
  }
}
</script>

<style scoped>
main{
  padding-top: 66px;
}
img.profile{
  width: 100px;
  height: 100px;
  border-radius: 100px;
}
input.hidden_file {
  visibility: hidden;
  position: absolute;
  left: -1000px;
}
.wrap-edit_img{
  width: 100px;
  height: 100px;
}
.edit_img{
  width: 100px;
  height: 100px;
}
.edit_img > img{
  border: 2px #ffffff solid;
  box-shadow: 0 0 5px #000;
}
.edit_img::after{
  display: flex;
  justify-content: center;
  align-items: center;
  content: url('../../public/edit.png');
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

main .menu a{
  margin: 5px 0;
  font-size: 20px;
}
</style>