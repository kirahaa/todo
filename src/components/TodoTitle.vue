<!-- TodoTitle.vue -->

<template>
    <div class="title">
        <p class="title-message">{{ message }}</p>
        <p class="title-task">
            You've got
            <span class="title-task-total">{{ this.todoItemsCount.left }} / {{ this.todoItemsCount.total }}</span> tasks today.
        </p>
    </div>
</template>

<script>
export default {
  data() {
      return {
          message: "Hello,",
      };
  },
  computed: {
    todoItemsCount() {
      // FIXME :: const 변수가 필요하지 않음
      return {
          // FIXME :: getter 로 토탈을 가져올거면 left 도 게터를 만드는게 좋음
          total: this.$store.getters.storedTodoItemsCount,
          left: this.$store.getters.checkLeftItemsCount,
      }
    }
  }

}
</script>

<style lang="scss">
.title {
  margin: 0 auto;
  letter-spacing: 0.03rem;
  color: #000;

  &-message {
    font-size: 25px;
  }

  &-task {
    margin-top: 56px;
    margin-bottom: 80px;
    font-weight: bold;


    &-total {
      font-size: 50px;
      line-height: 110%;
    }
  }
}

</style>