const storedTodoItems = (state) => {
    return state.todoItems;
}
const storedTodoItemsCount = (state, getters) => {
    return getters.storedTodoItems.length;
}
const checkLeftItemsCount = (state, getters) => {
    // FIXME :: 아래와 같은 동작을 하는 코드.
    const leftItemsCount = getters.storedTodoItems
    .filter(value => !value.completed).length;
    return leftItemsCount;
}
export { storedTodoItems, storedTodoItemsCount, checkLeftItemsCount };