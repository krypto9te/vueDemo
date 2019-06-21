<template>
  <div>
    <div v-if="!repoUrl">Loading....</div>
    <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
  import axios from 'axios'
import Axios from 'axios';
  export default {
    data() {
      return {
        repoUrl: '',
        repoName: ''
      }
    },

    mounted() {
      //使用VueResource发ajax请求获取数据
      const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
      // this.$http.get(url).then(

      //   // 成功了
      //   response => {
      //     const result = response.data
      //     //得到最受欢迎repo
      //     const mostRepo = result.items[0]
      //     this.repoUrl = mostRepo.html_url
      //     this.repoName = mostRepo.name
      //   },

      //   // 失败了
      //   response => {
      //     alert('请求失败')
      //   }
      // )

      //使用axios发ajax请求获取数据
      Axios.get(url).then(response => {
          const result = response.data
          //得到最受欢迎repo
          const mostRepo = result.items[0]
          this.repoUrl = mostRepo.html_url
          this.repoName = mostRepo.name
        }
      ).catch(error => {
          alert('请求失败')
      })
    }
  }
</script>

<style>

</style>