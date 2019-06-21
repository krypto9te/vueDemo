<template>
  <ul v-if="msgDetail">
    <li>id: {{msgDetail.id}}</li>
    <li>name: {{msgDetail.name}}</li>
    <li>birthday: {{msgDetail.birthday}}</li>
  </ul>
</template>

<script>
 
  export default {
    data() {
      return {
        msgDetail: {}
      }
    },

    mounted() {
      setTimeout(() => {
         const allMsgDetail = [
            {
              id: 1,
              name: 'Taeyoon',
              birthday: '1989/3/9'  
            },
            {
              id: 3,
              name: 'Somi',
              birthday: '2001/3/9'  
            },
            {
              id: 5,
              name: 'Jennie',
              birthday: '1996/1/16'  
            },
            {
              id: 9,
              name: 'hyuna',
              birthday: '1992/6/6'  
            }
          ]
        this.allMsgDetail = allMsgDetail
        const id = this.$route.params.id*1
        this.msgDetail = allMsgDetail.find(detail => detail.id===id)
      },1000)
    },

    watch: {
      $route: function(value){
        const id = value.params.id*1
        this.msgDetail = this.allMsgDetail.find(detail => detail.id===id)
      }
    },
  }
</script>

<style lang="css" scoped>

</style>