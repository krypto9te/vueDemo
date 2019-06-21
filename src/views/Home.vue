<template>
  <div>
    <h2>home</h2>
    <div>
      <ul class="nav nav-tabs">
        <li><router-link to="/home/group">Group</router-link></li>
        <li><router-link to="/home/solo">Solo</router-link></li>
      </ul>

      <div>
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>

</style>