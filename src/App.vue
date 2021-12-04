<template>
  <div id="app">
    <TodoHeader />
    <TodoTitle v-bind:propsdata="checkCount"/>
    <TodoInput v-on:addItem="addOneItem"/>
    <TodoController 
      v-on:sortItem="sortAllItem"
      v-on:clearAll="clearAllItem"
      />
    <TodoList 
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
      v-on:clearAll="clearAllItem"
    />
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
  computed: {
    checkCount() {
      const checkLeftItems = () => {
        let leftCount = 0;
        for(let i = 0; i < this.todoItems.length; i++) {
          if(this.todoItems[i].completed === false) {
            leftCount++;
          }
        }
        return leftCount;
      }
      const count = {
        total: this.todoItems.length,
        left: checkLeftItems()
      }
      return count;
    }
  },
  created() {
    console.log(this.todoItems);
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
    },
    removeOneItem(todoItem, index) {
        localStorage.removeItem(todoItem.item);
        this.todoItems.splice(index,1);
    },
    toggleOneItem(todoItem) {
        todoItem.completed = !todoItem.completed;
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    sortTodoLatest() {
      this.todoItems.sort(function(a,b){
        return b.time - a.time;
      })
    },
    sortTodoOldest() {
      this.todoItems.sort(function(a,b){
        return a.time - b.time;
      })
    },
    sortAllItem(selectedSort) {
      if(selectedSort.value === "data-desc") {
        this.sortTodoLatest();
        } else {
        this.sortTodoOldest();
      }
    },
    clearAllItem() {
      this.todoItems = [];
      localStorage.clear();
    }
  },
  mounted() {
    this.sortTodoOldest();
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