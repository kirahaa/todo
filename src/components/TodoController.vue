<!-- TodoController.vue -->

<template>
    <div class="controller">
        <div class="select">
            <label for="order">Order</label>
            <select name="order" id="order" class="selectbox" v-model="selected" v-on:change="sortTodo">
                <option value="date-asc">Date Ascending</option>
                <option value="date-desc">Date Descending</option>
            </select>
        </div>
        <button class="clear" @click="clearTodo">Clear All</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: "date-asc"
        }
    },
    methods: {
        clearTodo() {
            this.$emit('clearAll');
        },
        sortTodo() {
            this.$emit('sortItem', {value: this.selected});
        }
    }
}
</script>