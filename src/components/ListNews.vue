<template>
  <div>
    <navbar></navbar>

    <main>
      <div class="wrap-branches" v-if="Branch">
          <branch v-for="b in Branch.branches" :key="b.id" :branch="b"></branch>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Branch from "@/components/Branch"

export default {
  name: "ListNews",
  data: () => ({
    page: 0
  }),
  components: {
    'navbar': NavBar,
    'branch': Branch
  },
  computed: {
    Branch() {
      return this.$store.getters.branches
    }
  },
  created() {
    this.$store.dispatch('getListBranch', this.page);
  },
}
</script>

<style scoped>

</style>