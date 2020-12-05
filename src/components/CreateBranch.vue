<template>
  <div>
    <navbar></navbar>

    <main>
      <form>
        <div>
          {{ all_category }}
          <select multiple ref="select_category">
            <option value="" disabled selected>Выбор категории:</option>
            <option v-for="category in all_category" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
          <label>Materialize Multiple Select</label>
        </div>
      </form>
    </main>

  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import M from "materialize-css/dist/js/materialize.min";

export default {
  name: "CreateBranch",
  data: () => ({
    "new_branch": {
      "title": '',
      "content": '',
      "category_id": '',
      "parent_id": '',
    },
    "all_category": []
  }),
  components: {
    'navbar': NavBar
  },
  mounted() {
    M.FormSelect.init(this.$refs.select_category, {})
  }
}
</script>

<style scoped>
main{
  padding-top: 100px;
}
</style>