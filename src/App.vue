<template>
  <div id="app">
    <TodoHeader />
    <TodoTitle />
    <TodoInput />
    <TodoController />
    <TodoList />
    <TodoFooter />
    <Modal v-show="showModal" v-on:close="showModal = false">
      <template v-slot:modal-text>{{ modalText }}</template>
    </Modal>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoTitle from './components/TodoTitle';
import TodoInput from './components/TodoInput';
import TodoController from './components/TodoController';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import Modal from './components/common/Modal';


export default {
  name: 'App',
  data() {
    return {
      showModal: false,
      modalText: ""
    }
  },
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter,
    Modal
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