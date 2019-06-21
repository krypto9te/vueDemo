import Vue from 'vue'
import App from './App.vue'
import router from './router'

// eslint-disable-next-line no-new
new Vue({ // 配置对象属性名都是确定名称
  el: '#app',
  components: {App},
  template: '<App/>',
  router
})
