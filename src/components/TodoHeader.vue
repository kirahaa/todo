<!-- TodoHeader.vue -->

<template>
    <header class="header">
        <h1 class="logo">My Todo</h1>
        <p class="date">{{ timestamp }}</p>
    </header>
</template>

<script>
// import getDate from "../assets/commonJS/getDate.js";
import dayjs from 'dayjs';

export default ({
    data() {
        return {
            timestamp: "",
        };
    },
    created() {
        // FIXME :: dayjs 또는 momentjs 플러그인 사용할것
        // this.timestamp = `${getDate().month}/${getDate().date} ${getDate().week}`;
        this.timestamp = dayjs().format("MM/DD");
    },
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


