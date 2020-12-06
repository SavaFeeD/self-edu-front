<template>
  <div class="wrap">
    <div class="col s12 d-flex">
        <div class="left-bar blue darken-4">
          <div class="material-icons text-white  d-flex w-100 justify-content-center align-items-center">arrow_drop_up</div>
          <span class="text-white d-flex w-100 justify-content-center align-items-center">{{ branch.rate }}</span>
          <div class="material-icons text-white reverse  d-flex w-100 justify-content-center align-items-center">arrow_drop_up</div>
        </div>
        <div class="card">
          <div class="card-title" v-if="branch['owner']">
            <div class="d-flex">
              <router-link
                :to="`/profile/${branch['owner'].id}`"
                tag="a"
              >
                <img v-if="branch['owner'].image" :src="branch['owner'].image"
                     :alt="'ava_user_'+branch['owner'].id" class="profile">
                <img v-else src="../../public/default.jpg" :alt="'ava_user_'+branch['owner'].id" class="profile">
              </router-link>
              <h6 class="w-100"><span :class="branch['owner'].role.tag.slice(0,1)">{{branch['owner'].role.tag}}</span>{{ branch['owner'].login }}</h6>
              <label>{{branch['created_at']}}</label>
            </div>
          </div>

          <div class="card-content position-relative">
            <p>
              {{ branch.content }}
            </p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Branch",
  data: () => ({
  }),
  props: ['branch'],
  methods: {
    getImgUrl(img) {
      let images = require.context('../../public/', false)
      return images('./' + img)
    },
  }
}
</script>

<style scoped>
.card-title{
  padding: 10px;
  margin: 0;
}
.reverse{
  transform: rotate(180deg);
}
.left-bar{
  border-radius: 5px;
}
.left-bar div:active{
  color: #74b9ff;
}
img.profile{
  width: 40px;
  height: 40px;
  border-radius: 100px;
}
.card{
  width: 100%;
}
h6{
  margin: 0;
  padding-left: 10px;
  display: flex;
  align-items: center;
}
.card-content{
  padding: 10px;
}
</style>