import Vue from 'vue'
import App from './App.vue'
import { Button, Cell } from 'mint-ui'

// 注册全局标签
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
