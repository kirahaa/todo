<!-- TodoList.vue -->

<template>
    <ul class="list">
        <li class="list-item" v-for="(todoItem, index) in propsdata" :key="todoItem.item">
            <input 
                type="checkbox" 
                :id="todoItem.item"
                :checked="todoItem.completed ===  true"
                @change="toggleComplete(todoItem)"
            >
            <label :for="todoItem.item" class="list-label">
                <p class="list-text">{{ todoItem.item }}</p>
            </label>
            <p class="list-date">{{ todoItem.date }}, {{ todoItem.completed }}</p>
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
            this.$emit("removeItem", todoItem, index);
        },
        toggleComplete(todoItem) {
            this.$emit("toggleItem", todoItem);
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
        margin-bottom: 10px;
        padding: 5px 0;
        border-bottom: 1px solid #ccc;
    }
}
p {
    margin: 0;
}
</style>