<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 给TodoHeader标签对象绑定addTodo事件监听-->
      <!-- <TodoHeader @addTodo="addTodo"/> -->
      <TodoHeader ref="header"/>
      <TodoList :todos="todos"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" 
      :selectAllTodos="selectAllTodos"/>
      <TodoFooter>
        <input type="checkbox" v-model="isAllcheck" slot="check">
        <span slot="count">已完成{{completeSize}} / 全部{{todos.length}}</span>
        <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>

<!-- 绑定事件监听 ---订阅消息
      触发事件 ---发布消息 --->

<script>
  import PubSub from 'pubsub-js'
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'
  import storageUtil from './utils/storageUtil'
  
  export default {

    data() {
      return {
        // todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
        todos: storageUtil.getTodos()
      }
    },

    computed: {
      completeSize () {
        return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0), 0)
      },

      isAllcheck: {
        get () {
          return this.completeSize === this.todos.length && this.completeSize>0
        },

        set (value) { //CheckBox的值
          this.selectAllTodos(value)
        }
      }
  },

    mounted() { //执行异步代码
      //给TodoHeader标签对象绑定addTodo事件监听
      // this.$on('addTodo', this.addTodo)
      this.$refs.header.$on('addTodo', this.addTodo)

      //订阅消息
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index)
      })

    },

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },

      deleteTodo (index) {
      this.todos.splice(index, 1)
      },

      //删除所有选中的
      deleteCompleteTodos () {
        window.confirm('是否删除任务？')
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      
      //全选/全不选 选择是否传参数，传几个
      selectAllTodos (check) {
         this.todos.forEach(todo => todo.complete = check)
      }
    },

    watch: {  //监视
      todos: {
        deep: true, //深度监视
        /* handler: function (value) {
          //将todos最新的值的json数据，保存到localstorage
          // window.localStorage.setItem('todos_key', JSON.stringify(value))
          storageUtil.saveTodos(value)
        }*/ 
        handler: storageUtil.saveTodos
        /**
         * handler: function (todos) {
            window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
          }
         */
      }
    },

  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
  /*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

