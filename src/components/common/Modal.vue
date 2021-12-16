<template>
    <div class="modal modal-dim" v-on:click.self="$emit('close')">
        <div class="modal-content">
            <p class="modal-content-text">
                <slot name="modal-text">(여기에 모달 내용이 들어감)</slot>
            </p>
            <button class="modal-close" v-on:click="$emit('close')">
                OK
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss">
.modal {
    &-dim {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 999;
    }
    
    &-content {
        min-width: 500px;
        margin: 0 auto;
        padding: 30px;
        border-radius: 2px;
        box-shadow: 0 10px 30px -4px rgba(10, 10, 10, 0.2);
        background-color: #fff;
        transition: all 0.3s ease;
        &-text {
            padding: 10px;
            text-align: center;
            font-size: 15px;
            color: #4a4a4a;
        }
        button {
            text-align: center;
            margin: 0 auto;
            padding: 2px 5px;
            border: 1px solid #b1b1b1;
            border-radius:5px;
            font-size: 14px;
            color: #555;
            &:hover {
                color: #323232;
                border-color: #777;
            }
        }
    }
}
</style>