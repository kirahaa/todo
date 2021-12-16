<template>
  <div id="app">
    <TodoHeader />
    <TodoTitle />
    <TodoInput v-on:alertModal="showModal"/>
    <TodoController v-on:alertModal="showConfirmModal"/>
    <TodoList />
    <TodoFooter />
    <Modal v-show="modalVisible" v-on:close="modalVisible = false">
      <template v-slot:modal-text>{{ modalText }}</template>
    </Modal>
    <ConfirmModal v-show="ConfirmModalVisible" v-on:close="ConfirmModalVisible = false">
      <template v-slot:modal-text>{{ modalText }}</template>
    </ConfirmModal>
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
import ConfirmModal from './components/common/ConfirmModal';


export default {
  name: 'App',
  data() {
    return {
      modalVisible: false,
      ConfirmModalVisible: false,
      modalText: "",
      confirmMethods: true
    }
  },
  methods: {
    showModal(text) {
      this.modalText = text;
      this.modalVisible = !this.modalVisible;
    },
    showConfirmModal(text) {
      this.modalText = text;
      this.ConfirmModalVisible = !this.ConfirmModalVisible;
    }
  },
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter,
    Modal,
    ConfirmModal
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

#app {
  margin: 0 auto;
  text-align: center;
}
</style>