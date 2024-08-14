import * as Styled from './StyledTodo'

function Todo({ item, onDeleteTodoHandler, onEditTodoHandler }) {

    const onSubmitDeleteHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onDeleteTodoHandler(item.id)
    }

    return (
        <Styled.StTodoContainer onSubmit={onSubmitDeleteHandler}>
            <Styled.StLink to={`/${item.id}`} key={item.id}>
                <div>상세보기</div>
            </Styled.StLink>
            <div key={item.id}>
                <h2>{item.text}</h2>
            </div>
            <Styled.StButtonSet>
                <Styled.StTodoDeleteButton type='submit'>
                    삭제하기
                </Styled.StTodoDeleteButton>
                <Styled.StTodoCompleteButton onClick={() => { onEditTodoHandler(item.id) }}>
                    {item.completed ? '미완료' : '완료'}
                </Styled.StTodoCompleteButton>
            </Styled.StButtonSet>
        </Styled.StTodoContainer>
    )
}

export default Todo