import React from 'react'
import * as St from '../StyledAccount'
import Input from '../../../components/authom/input/Input'
import Button from '../../../components/authom/button/Button'
import { useNavigate } from 'react-router-dom'
import Layout from '../../../components/layout/Layout'

function Register() {

  const navigate = useNavigate()

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/login")
  }

  return (
    <Layout>
    <St.PageContainer >
      <St.StContainer>
        <St.StHeaderMsg size={"30px"}>회원가입</St.StHeaderMsg>
        <form onSubmit={onSubmitHandler}>
          {/* 아이디 생성 인풋 */}
          <Input
            htmlFor={'user_create_id'}
            type={'text'}
            id={'user_create_id'}
            placeholder={'사용하실 아이디를 입력해주세요.'}
          >아이디</Input>

          {/* 비밀번호 생성 인풋 */}
          <Input
            htmlFor={'user_create_pw'}
            type={'password'}
            id={'user_create_pw'}
            placeholder={'사용하실 비밀번호를 입력해주세요.'}
          >비밀번호</Input>

          {/* 이름 인풋 */}
          <Input
            htmlFor={'user_name'}
            type={'text'}
            id={'user_name'}
            placeholder={'사용자의 이름을 입력해주세요.'}
          >이름</Input>

          {/* 생년월일 인풋 */}
          <Input
            htmlFor={'user_date'}
            type={'text'}
            id={'user_date'}
            placeholder={'생년월일8자리입력'}
          >생년월일</Input>
          <Button type={'submit'}>아이디 생성하기!</Button>

          <p><St.StLink to="/findPassword">비밀번호를 잃어버리셨나요?</St.StLink></p>
        </form>
      </St.StContainer>
    </St.PageContainer >
    </Layout>
    
  )
}

export default Register