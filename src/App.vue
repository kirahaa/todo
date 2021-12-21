<template>
  <div id="app">
    <TodoHeader />
    <TodoTitle />
    <TodoInput @alertModal="showModal"/>
    <TodoController @alertModal="showConfirmModal"/>
    <TodoList />
    <TodoFooter />

    <!-- Modal --> 
    <Modal 
        v-show="modalVisible" 
        @close="modalVisible = false"
      >
      <template v-slot:modal-text>{{ modalText }}</template>
    </Modal>

    <ConfirmModal v-show="ConfirmModalVisible" @close="ConfirmModalVisible = false">
      <template v-slot:modal-text>{{ modalText }}</template>
    </ConfirmModal>

    <!-- handling event는 각 component에서 일어나는 게 나을까? 
    아니면 app.vue에서 일어나는게 나을까? 
    각 component에서 일어나는게 나을듯..
     -->

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
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter,
    Modal,
    ConfirmModal
  },
  data() {
    return {
      modalVisible: false,
      ConfirmModalVisible: false,
      modalText: "",
      confirmMethods: true,
    }
  },
  methods: {
    showModal(text) {
      if(event.target.classList.contains('add-input')) {
        this.modalType = false;
      } else {
        this.modalType = true;
      }
      this.modalText = text;
      this.modalVisible = !this.modalVisible;
    },
    showConfirmModal(text) {
      this.modalText = text;
      this.ConfirmModalVisible = !this.ConfirmModalVisible;
    }
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