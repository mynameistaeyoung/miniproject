import styled from "styled-components";
import React from 'react'

interface ButtonProps {
  type :"button" | "submit"
  children: string
}

const Button:React.FC<ButtonProps> = ({type,children})=> {
  return (
    <div>
      <StButton type={type}>{children}</StButton>
    </div>
  )
}

export default Button

const StButton = styled.button`
  border:1px solid gray;
  border-radius:8px;
  width: 95%;
  height:42px;
  margin-top:20px;
  font-weight:bold;
  color:white;
  background-color:#003366;
  &:hover {
    background-color: #002244;
  }
`

export {StButton}