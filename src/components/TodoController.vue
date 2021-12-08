<!-- TodoController.vue -->

<template>
    <article>
    <div class="controller">
        <div class="select">
            <select name="order" id="order" class="selectbox" v-model="selected" @change="sortTodo">
                <option value="date-asc">Oldest</option>
                <option value="date-desc">Latest</option>
            </select>
        </div>
        <button class="clear" @click="clearTodo">Clear All</button>
    </div>
    </article>
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
            // this.$emit('clearAll');
            // FIXME :: 프론트에서는 commit 이 아니라 dispatch 를 사용해서 action 을 호출한다.
            // commit -> mutation / dispatch -> action
            const modalText = "It cannot be canceled. Are you sure you want to erase all?";
            this.$emit('alertModal', modalText);
        },
        sortTodo() {
            // this.$emit('sortItem', {value: this.selected});
            if (this.selected === "date-desc") {
                this.$store.commit("sortTodoLatest");
            } else {
                this.$store.commit("sortTodoOldest");
            }
        }
    }
}
</script>

<style lang="scss">
article {
    padding-top: 20px;
    background: #eee;
}
.controller {
    display: flex;
    justify-content: space-between;
    max-width: 720px;
    margin: 0 auto;

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

select {
    height: 40px;
    padding: 0 10px;
    border: 1px solid #ccc;
    font-size: 18px;
}
</style>
