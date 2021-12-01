<!-- TodoList.vue -->

<template>
    <ul class="list">
        <li class="list-item" v-for="todoItem in todoItems" :key="todoItem">
            <input type="checkbox" :id="todoItem.item">
            <label :for="todoItem.item" class="list-label">
                <p class="list-text">{{ todoItem }}</p>
            </label>
            <p class="list-date">12/1</p>
            <button class="list-delete">Delete</button>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            todoItems: []
        }
    },
    created() {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    this.todoItems.push(
                       JSON.parse(localStorage.getItem(localStorage.key(i))) 
                    );
                }
                // localStorage ? getItem() 메서드는 keyname을 인자로 keyValue를 리턴해준다.
            }
        }
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