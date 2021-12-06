<!-- TodoHeader.vue -->

<template>
    <header class="header">
        <h1 class="logo">My Todo</h1>
        <p class="date">{{ timestamp }}</p>
    </header>
</template>

<script>
import getDate from "../assets/commonJS/getDate.js";

export default ({
    data() {
        return {
            timestamp: ""
        };
    },
    created() {
        this.timestamp = `${getDate().month}/${getDate().date} ${getDate().week}`;
    }
})
</script>

<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 720px;
    margin: 0 auto;
    h1 {
        font-size: 20px;
    }
    p {
        color: #aaa;
    }
}
</style>


