import { ListContainer, ListWrapper } from "./StyledList"
import Todo from "../todo/Todo"
import { useTodoStore } from "../../zustand/bearsStore"

function List() {
  const { todos, deleteTodo, editTodo } = useTodoStore(state => state)

  const onDeleteTodoHandler = (todoId) => {
    deleteTodo(todoId)
  }

  const onEditTodoHandler = (todoId) => {
    editTodo(todoId)
  }
  
  return (
    <ListContainer>
      <h2>이거 해야 함..🔥</h2>
      <ListWrapper>
        {todos.map(item => !item.completed ?
          <Todo
            item={item}
            key={item.id}
            onDeleteTodoHandler={onDeleteTodoHandler}
            onEditTodoHandler={onEditTodoHandler}
          /> : null)}
      </ListWrapper>
      <h2>다 했다..!🎉</h2>
      <ListWrapper>
        {todos.map(item => item.completed ?
          <Todo
            item={item}
            key={item.id}
            onDeleteTodoHandler={onDeleteTodoHandler}
            onEditTodoHandler={onEditTodoHandler}
          /> : null)}
      </ListWrapper>
    </ListContainer>
  )
}

export default List