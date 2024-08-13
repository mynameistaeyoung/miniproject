import { ListContainer,ListWrapper } from "./StyledList"
import Todo from "../todo/Todo"

function List() {
    return (
        <ListContainer>
          <h2>이거 해야 함..🔥</h2>
          <ListWrapper>
            <Todo/>
          </ListWrapper>
          <h2>다 했다..!🎉</h2>
          <ListWrapper>
          <Todo/>
          </ListWrapper>
        </ListContainer>
      )
}

export default List