<!-- TodoTitle.vue -->

<template>
    <div class="title">
        <p class="title-message">{{ message }}</p>
        <p class="title-task">
            You've got
            <span class="title-task-total">{{ taskTotal }}</span> tasks today.
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello, hayeong",
            taskTotal: 5
        };
    }
}
</script>

<style lang="scss">
.title {
  margin: 0 auto;
  letter-spacing: 0.03rem;
  color: #000;
 
  &-message {
    font-size: 1.6rem;
  }
 
  &-task {
    margin-top: 3.5rem;
    margin-bottom: 5rem;
    font-weight: bold;
 
    &-top {
      display: block;
      font-size: 2.6rem;
    }
 
    &-total {
      font-size: 5.4rem;
      line-height: 110%;
    }
  }
}

</style>