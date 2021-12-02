<!-- TodoList.vue -->

<template>
    <ul class="list">
        <li class="list-item" v-for="(todoItem, index) in propsdata" :key="todoItem.item">
            <input 
                type="checkbox" 
                :id="todoItem.item"
                :checked="todoItem.completed ===  true"
                :change="toggleComplete(todoItem)"
            >
            <label :for="todoItem.item" class="list-label">
                <p class="list-text">{{ todoItem }}</p>
            </label>
            <p class="list-date">12/1</p>
            <button 
                class="list-delete" 
                @click="removeTodo(todoItem, index)"
            >Delete</button>
        </li>
    </ul>
</template>

<script>
export default {
    props: ["propsdata"],
    methods: {
        removeTodo(todoItem, index) {
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(index,1);
        },
        toggleComplete(todoItem) {
            todoItem.completed = !todoItem.completed;
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
    }
}
</script>

<style lang="scss">
.list {
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
    }
}
</style>