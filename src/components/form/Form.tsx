import * as St from './StyledForm'
import { useTodoStore } from '../../zustand/bearsStore'
import { useState } from 'react'

function Home() {
    const { addTodo,todos } = useTodoStore(state => state)
    const [text, setText] = useState("")

    const onSubmitAddTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText("")
        console.log(todos)
    };
    return (
        <>
            <St.StAddForm onSubmit={onSubmitAddTodoHandler}>
                <div>
                    <St.StFormLabel htmlFor="user_Todo">할 일</St.StFormLabel>
                    <St.StAddInput
                        id="user_Todo"
                        type="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <St.StAddButton type='submit'>추가하기</St.StAddButton>
            </St.StAddForm>
        </>
    )
}

export default Home