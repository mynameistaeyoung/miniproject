import * as Styled from './StyledTodo'
import Button from '../../authom/button/Button';

type TodoItem = {
    id: string;
    text: string;
    completed: boolean;
}

interface TodoProps {
    item: TodoItem
    onDeleteTodoHandler: (id: string) => void;
    onEditTodoHandler: (id: string) => void;
}

function Todo({ item, onDeleteTodoHandler, onEditTodoHandler }: TodoProps) {

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
                <Button
                    size="SmallDelete"
                    type='submit'>
                    삭제하기
                </Button>
                <Button
                    size="SmallCompleted"
                    onClick={() => { onEditTodoHandler(item.id) }}>
                    {item.completed ? '미완료' : '완료'}
                </Button>
            </Styled.StButtonSet>
        </Styled.StTodoContainer>
    )
}

export default Todo


// border: 2px solid red;
//     background-color: #fff;
//     border-radius:5px