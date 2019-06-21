<template>
  <div class="msg">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default { //配置对象（与vue一致）
  data() {  //必须写函数
    return {
      msg: 'Hello Vue!'
    }
  },
}
</script>

<style lang="">
  .msg {
    color: violet;
    font-size: 30px;
  }
</style>