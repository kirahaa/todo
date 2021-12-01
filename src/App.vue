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


export default {
  name: 'App',
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