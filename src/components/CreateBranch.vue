<template>
  <div>
    <navbar></navbar>

    <main>
      <div class="d-flex justify-content-center">
        <h4>Создание обсуждения</h4>
      </div>

      <form @submit.prevent="CreateNewBranch">
        <div class="input-field col s12">
          <input type="text" class="validate" v-model="new_branch.title">
          <label>Заголовок обсуждения:</label>
        </div>
        <div class="input-field col s12 mt-4">
          <textarea id="textarea1" class="materialize-textarea" v-model="new_branch.content"></textarea>
          <label>Текст обсуждения:</label>
        </div>
        <div class="input-field col s12 mt-5">
          <select ref="cat">
            <option value="" disabled selected>Категории:</option>
            <option v-for="cat in getCategories" :key="cat.id" :value="JSON.stringify(cat)">{{ cat.name }}</option>
          </select>
          <label>Выберите категорию обсуждения:</label>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <button type="submit" class="btn">Создать</button>
        </div>
      </form>
    </main>

  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import M from 'materialize-css/dist/js/materialize.min'

export default {
  name: "CreateBranch",
  data: () => ({
    "new_branch": {
      "title": '',
      "content": '',
      "category_id": '',
      "parent_id": null,
    }
  }),
  components: {
    'navbar': NavBar
  },
  mounted() {
    document.addEventListener('DOMContentLoaded', function() {
      M.AutoInit();
    });
  },
  updated() {
    this.new_branch.category_id = M.FormSelect.init(this.$refs.cat, {});
  },
  created() {
    this.$store.dispatch('getCategories');
  },
  computed: {
    getCategories() {
      return this.$store.getters.getCategory;
    },
    getToken() {
      return this.$store.getters.getToken;
    },
  },
  methods: {
    async CreateNewBranch() {
      let pm = this;

      this.new_branch.category_id = JSON.parse(this.new_branch.category_id.$el[0].value).id;

      console.log(this.new_branch.category_id)
      const res = await fetch('http://u96872.test-handyhost.ru/self-edu-backend/public/api/branch', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${pm.getToken}`,
        },
        body: JSON.stringify(this.new_branch)
      })
      const result = await res.json();
      console.log(result)
    }
  }
}
</script>

<style scoped>
main{
  padding-top: 70px;
  min-height: 100vh;
}
label{
  max-width: 200px;
  z-index: -1!important;
}
</style>