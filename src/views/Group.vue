<template>
  <div>
    <ul>
      <li v-for="(group, index) in groupArr" :key="index">{{group}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        groupArr: ['Blackpink', 'Redvelvet', 'Twice', 'Itzy']
      }
    },
  }
</script>

<style lang="css" scoped>

</style>