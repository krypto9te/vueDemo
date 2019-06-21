<template>
  <div>
    <ul>
    <li v-for="solo in soloArr" :key="solo.id">
      <!-- <a href="???">{{solo.name}}</a> -->
      <router-link :to="`/home/solo/msgdetail/${solo.id}`">{{solo.name}}</router-link>
      <button @click="pushShow(solo.id)">push查看</button>
      <button @click="replaceShow(solo.id)">replace查看</button>
      </li>
  </ul>
  <button @click="$router.back()">back</button>
  <hr>
  <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        soloArr: []
      }
    },

    mounted() {
      //模拟ajax请求从后台获取数据
      setTimeout(() => {
        const soloArr = [
          {
            id: 1,
            name: 'Taeyoon',  
          },
          {
            id: 3,
            name: 'Somi',
          },
          {
            id: 5,
            name: 'Jennie',
          },
          {
            id: 9,
            name: 'hyuna',
          },
        ]
        this.soloArr = soloArr
      },1000)
    },

    methods: {
      pushShow (id) {
        this.$router.push(`/home/solo/msgdetail/${id}`)
      },
      replaceShow (id) {
        this.$router.replace(`/home/solo/msgdetail/${id}`)
      }
    },
  }
</script>

<style lang="css" scoped>

</style>