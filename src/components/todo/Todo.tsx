import * as Styled from './StyledTodo'
import { useTodoStore } from '../../zustand/bearsStore';

function Todo() {
    const onSubmitDeleteHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const { todos } = useTodoStore(state => state)


    return (
        <Styled.StTodoContainer onSubmit={onSubmitDeleteHandler}>
            {todos.map(item => (
                <div key={item.id}>
                    <h2>{item.text}</h2>
                </div>
            ))}
            <Styled.StButtonSet>
                <Styled.StTodoDeleteButton type='submit'>
                    삭제하기
                </Styled.StTodoDeleteButton>

                <Styled.StTodoCompleteButton>
                    완료!
                </Styled.StTodoCompleteButton>
            </Styled.StButtonSet>
        </Styled.StTodoContainer>
    )
}

export default Todo