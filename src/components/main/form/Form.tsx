import * as St from './StyledForm'
import { useTodoStore } from '../../../zustand/bearsStore'
import { useState } from 'react'
import Input from '../../authom/input/Input'
import Button from '../../authom/button/Button'

function Form() {
    const { addTodo, todos } = useTodoStore(state => state)
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
                    <Input
                        size="Large"
                        htmlFor={"user_Todo"}
                        type={'text'}
                        id={"user_Todo"}
                        placeholder={"오늘의 할 일을 적어주세요!"}
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                    >
                        할 일</Input>
                        <Button 
                        size ="Medium"
                        type='submit'>추가하기</Button>
            </St.StAddForm>
        </>
    )
}

export default Form


