const storedTodoItems = (state) => {
    return state.todoItems;
}
const storedTodoItemsCount = (state, getters) => {
    return getters.storedTodoItems.length;
}

export { storedTodoItems, storedTodoItemsCount };