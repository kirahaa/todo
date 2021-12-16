<!-- TodoInput.vue -->

<template>
    <div class="add">
        <input
            type="text"
            class="add-input"
            placeholder="Enter your task"
            v-model="newTodoItem"
            v-on:keypress.enter="addTodoItem"
            ref="taskInput"
        >
        <button class="add-button" v-on:click="addTodoItem">
            <span class="blind">
                →
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
            if(! this.newTodoItem) {
                const modalText = "The form is empty, Please note your task.";
                this.$emit("alertModal", modalText);
                return false;
            }
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

<style lang="scss">
.add {
    display: flex;
    justify-content: space-between;
    max-width: 720px;
    margin: 0 auto 40px;
    padding: 0 20px;
    border: 1px solid #ccc;
    border-radius: 30px;
    input {
        width: 90%;
        border: none;
        height: 60px;
        font-size: 20px;
        text-indent: 10px;
        outline: none;
        background: transparent;
    }
    button {
        border: none;
        background-color: transparent;
        color: #666;
        font-size: 30px;
        cursor: pointer;
        &:hover {
            color: #111;
        }
    }
}
</style>
