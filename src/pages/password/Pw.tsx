import React from 'react'
import * as St from '../login/StyledLogin'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

function Pw() {
    const navigate = useNavigate();
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/login")
    }

    return (
        <St.PageContainer>
            <St.StContainer>
                <h3>비밀번호를 찾고자하는 아이디를 입력해주세요.</h3>
                <form onSubmit={onSubmitHandler}>
                    <Input
                        htmlFor={'user_find_pw'}
                        type={'text'}
                        id={'user_find_pw'}
                        placeholder={'아이디를 입력해주세요.'}
                    />
                    <Button type={'submit'}>다음</Button>
                </form>
            </St.StContainer>
        </St.PageContainer>
    )
}

export default Pw