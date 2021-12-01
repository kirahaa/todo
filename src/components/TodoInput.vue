<!-- TodoInput.vue -->

<template>
    <div class="add">
        <input 
            type="text" 
            class="add-input" 
            placeholder="Enter your task" 
            v-model="newTodoItem"
            v-on:keyup.enter="addTodoItem"
            >
        <button class="add-button" v-on:click="addTodoItem">
            <span class="blind">
                Add
            </span>
        </button>
    </div>
</template>

<script>
import getDate from '../assets/commonJS/getDate.js';

export default {
    data() {
        return {
            newTodoItem: ""
        }
    },
    methods: {
        addTodoItem() {
            if (this.newTodoItem !== ""){
                var value = {
                    item: this.newTodoItem,
                    date: `${getDate().date} ${getDate().week}`,
                    time: getDate().time,
                    completed: false // 새 속성 추가
                };
                localStorage.setItem(this.newTodoItem, JSON.stringify(value));
                this.clearInput();
            }
        },
        clearInput() {
            this.newTodoItem = "";
        }
    }
}
</script>