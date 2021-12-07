<template>
    <div class="modal">
        <slot name="modal-text">(여기에 모달 내용이 들어감)</slot>
    </div>
</template>

<style lang="scss">
.modal {
    position: absolute;
    top: 40%;
    left: 40%;
    padding: 50px 60px;
    background-color: #fff;
    text-align: center;
}
</style>