<template>
  <div>
    {{Branch}}
  </div>
</template>

<script>
export default {
  name: "BranchMore",
  computed: {
    Branch() {
      return this.$store.getters.branch
    }
  },
  created() {
    this.$store.dispatch('getOneBranch', parseInt(this.$router.params.id));
  },
}
</script>

<style scoped>

</style>