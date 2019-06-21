<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>     
    </div>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'
  
  export default {

    data() {
      return {
        comments: [  //数据在哪个组件，更新数据的方法就在那个组件
          {
            name: 'Lisa',
            content: 'Vue!'
          },
          {
            name: 'Jennie',
            content: 'Vue+js!'
          },
          {
            name: 'Lisa',
            content: 'Vuex+Vue!'
          }
        ]
      }
    },

    methods: {
      //添加
      addComment (commment){
        this.comments.unshift(commment)
      },
      //删除指定下标评论
      deleteComment (index) {
        this.comments.splice(index, 1)
      }
    },

    

    components: {
      Add,
      List,
    }
  }
</script>

<style>

</style>
