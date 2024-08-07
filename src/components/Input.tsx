import styled from "styled-components"
import React from 'react'

type UserProps = {
  htmlFor: string;
  id: string;
  type: string;
  placeholder: string;
  children: string;
}
function Input({ htmlFor, id, type, placeholder, children }: UserProps) {
  return (
    <div>
      <label htmlFor={htmlFor}>
        {children}
        <StInput
          id={id}
          type={type}
          placeholder={placeholder}
        />
      </label>
    </div>
  )
}

export default Input


const StInput = styled.input`
  border:1px solid gray;
  border-radius:8px;
  width: 95%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
`

export { StInput }