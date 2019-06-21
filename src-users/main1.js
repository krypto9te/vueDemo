import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// 声明使用插件
Vue.use(VueResource) // 内部会给VM对象和组件对象添加一个属性：$http

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
