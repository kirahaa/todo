<!-- TodoInput.vue -->

<template>
    <div class="add">
        <input 
            type="text" 
            class="add-input" 
            placeholder="Enter your task" 
            v-model="newTodoItem"
            v-on:keyup.enter="addTodoItem"
            ref="taskInput"
            >
        <button class="add-button" v-on:click="addTodoItem">
            <span class="blind">
                Add
            </span>
        </button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            newTodoItem: ""
        }
    },
    methods: {
        addTodoItem() {
            // if (this.newTodoItem !== ""){
            //     this.$emit("addItem", this.newTodoItem);
            // }
            this.$store.commit("addOneItem", this.newTodoItem);
            this.clearInput();
            this.$refs.taskInput.focus();
        },
        clearInput() {
            this.newTodoItem = "";
        }
    }
}
</script>