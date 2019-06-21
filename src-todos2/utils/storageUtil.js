/*
使用localstorage进行存储数据的工具模块
1.函数（1个功能）
2.对象（多个功能）
需要对外暴露1个功能还是多个功能
*/
const TODOS_KEY = 'todos_key'
export default {
  saveTodos (todos) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },

  getTodos () {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  }
}
