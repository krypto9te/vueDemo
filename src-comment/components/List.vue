<template>
 <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 v-show="comments.length===0">暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
          <Items v-for="(comment, index) in comments" :key="index" :comment="comment" :deleteComment="deleteComment" :index="index"/>
        </ul>
      </div>
</template>

<script>
  import Items from './Items.vue'
  export default {
    //声明接收属性，属性成为接收对象的属性
    props: ['comments', 'deleteComment'],

    components: {
      Items
    }
  }
</script>

<style>
  .reply {
  margin-top: 0px;
}


</style>