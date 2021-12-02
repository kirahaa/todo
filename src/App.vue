<template>
  <div id="app">
    <TodoHeader />
    <TodoTitle />
    <TodoInput v-on:addItem="addOneItem"/>
    <TodoController />
    <TodoList v-bind:propsdata="todoItems"/>
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoTitle from './components/TodoTitle';
import TodoInput from './components/TodoInput';
import TodoController from './components/TodoController';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import getDate from "./assets/commonJS/getDate.js";

export default {
  name: 'App',
  data() {
    return {
        todoItems: []
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i))) 
          );
        }
        // localStorage ? getItem() 메서드는 keyname을 인자로 keyValue를 리턴해준다.
        // localStorage는 컴퓨터의 디스크같은 개념, 파일처럼 저장하고 꺼내서 사용하고 하는 느낌
        // store는 메모리의 느낌. localStorage 보다 더 빠르게 데이터를 주고받을 수 있음.
      }
    }
  },
  methods: {
    addOneItem(todoItem) {
      var value = {
        item: todoItem,
        date: `${getDate().date} ${getDate().week}`,
        time: getDate().time,
        completed: false 
      };
      localStorage.setItem(todoItem, JSON.stringify(value));
      this.todoItems.push(value);
    }
  },
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter
  }
}
</script>

<style lang="scss">
ul, ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
#app {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}
</style>