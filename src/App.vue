<template>
  <div id="app">
    <TodoHeader />
    <TodoTitle />
    <TodoInput />
    <TodoController />
    <TodoList />
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
import dayjs from 'dayjs';


export default {
  name: 'App',
  data() {
    return {
      day: dayjs().format("YYYY-MM-DD")
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
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
ul, ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
button {
  padding: 0 10px;
  border: none;
  background-color: transparent;
  color: #aaa;
  cursor: pointer;
  &:hover {
      color: #111;
  }
}
#app {
  margin: 0 auto;
  text-align: center;
}
</style>