<!-- TodoController.vue -->

<template>
    <div class="controller">
        <div class="select">
            <label for="order">Order</label>
            <select name="order" id="order" class="selectbox">
                <option value="date-asc">Date Ascending</option>
                <option value="date-desc">Date Descending</option>
                <option value="name-asc">Name Ascending</option>
                <option value="name-desc">Name Descending</option>
            </select>
        </div>
        <button class="clear" @click="clearTodo">Clear All</button>
    </div>
</template>

<script>
export default {
    clearTodo() {
        localStorage.clear();
        // localStorage 비우려면, clear() 메서드 사용!
    }
}
</script>