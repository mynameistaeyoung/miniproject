import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as St from '../StyledAccount'
import Input from '../../../components/authom/input/Input'
import Button from '../../../components/authom/button/Button'
import Layout from '../../../components/layout/Layout'


function Login() {

    const navigate = useNavigate()

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/")
    }

    return (
        <Layout>
            <St.PageContainer >
                <St.StContainer>
                    <St.StHeaderMsg size={'30px'}>환영합니다!</St.StHeaderMsg>
                    <form onSubmit={onSubmitHandler}>

                        {/* 아이디 인풋 */}
                        <Input
                            htmlFor={'user_id'}
                            type={'text'}
                            id={'user_id'}
                            placeholder={'아이디를 입력해주세요.'}
                        >ID</Input>

                        {/* 비밀번호 인풋 */}
                        <Input
                            htmlFor={'user_pw'}
                            type={'password'}
                            id={'user_pw'}
                            placeholder={'비밀번호를 입력해주세요.'}
                        >PW</Input>

                        {/* 버튼 */}
                        <Button type={'submit'}>로그인</Button>
                    </form>
                    <St.StFooterMsg><St.StLink to="/register">회원가입</St.StLink> | <St.StLink to="/findPassword">비밀번호 찾기</St.StLink></St.StFooterMsg>
                </St.StContainer>
            </St.PageContainer >
        </Layout>
    )
}

export default Login
