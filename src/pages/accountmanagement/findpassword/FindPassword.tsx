import React from 'react'
import * as St from '../StyledAccount'
import Input from '../../../components/authom/input/Input'
import Button from '../../../components/authom/button/Button'
import { useNavigate } from 'react-router-dom'
import Layout from '../../../components/main/layout/Layout'

function FindPassword() {
    const navigate = useNavigate();
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/login")
    }

    return (
        <Layout>
            <St.PageContainer>
                <St.StContainer>
                    <h3>비밀번호를 찾고자하는 아이디를 입력해주세요.</h3>
                    <form onSubmit={onSubmitHandler}>
                        <Input
                            size="Medium"
                            htmlFor={'user_find_pw'}
                            type={'text'}
                            id={'user_find_pw'}
                            placeholder={'아이디를 입력해주세요.'}
                        >아이디</Input>
                        <Button
                            size="Large"
                            type={'submit'}>다음</Button>
                    </form>
                </St.StContainer>
            </St.PageContainer>
        </Layout>
    )
}

export default FindPassword