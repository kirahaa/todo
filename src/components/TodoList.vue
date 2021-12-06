<!-- TodoList.vue -->

<template>
    <section>
    <ul class="list">
        <li class="list-item" v-for="(todoItem, index) in this.$store.state.todoItems" :key="todoItem.item">
            <input 
                type="checkbox" 
                :id="todoItem.item"
                :checked="todoItem.completed ===  true"
                @change="toggleComplete({todoItem})"
            >
            <!-- @change -->
            <label :for="todoItem.item" class="list-label">
                <p class="list-text">{{ todoItem.item }}</p>
            </label>
            <p class="list-date">{{ todoItem.date }}</p>
            <button 
                class="list-delete" 
                @click="removeTodo(todoItem, index)"
            >✕</button>
        </li>
    </ul>
    </section>
</template>

<script>
export default {
    methods: {
        removeTodo(todoItem, index) {
            // this.$emit("removeItem", todoItem, index);
            this.$store.commit("removeOneItem", {
                todoItem, 
                index
            })
        },
        toggleComplete(todoItem) {
            // this.$emit("toggleItem", todoItem);
            this.$store.commit("toggleOneItem", todoItem);
        },
    },
    mounted() {
        // list 기본 오래된 순 정렬
        this.$store.commit('sortTodoOldest');
    }
}
</script>

<style lang="scss">
section {
    padding: 30px 0;
    background-color: #eee;
}
.list {
    max-width: 720px;
    margin: 0 auto;
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        padding: 15px 20px;
        background-color: #fff;
        font-size: 20px;
        &:last-of-type {
            margin: 0;
        }
        .list-label {
            width: 75%;
            p {
                text-align: left;
            }
        }
        .list-date {
            width: 10%;
            color: #aaa;
            font-size: 15px;
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
    }
}
p {
    margin: 0;
}
</style>