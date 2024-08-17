import styled from "styled-components";
import React from 'react'

interface ButtonProps {
  type?: "button" | "submit";
  children: string;
  size: string;
  onClick?: () => void
}

interface StButtonProps {
  border: any;
  backgroundColor: string;
  color?: string;
  width?: string;
  height?: string;
  marginTop?: string;
  fontweight?: string;
  hoverBgColor?: string;
}

const Button: React.FC<ButtonProps> = ({ type, children, size, onClick }) => {
  return (
    size === "Large" ?
      <div>
        <StButton
          border="1px solid gray"
          width="95%"
          height="42px"
          marginTop="20px"
          fontweight="bold"
          color="white"
          backgroundColor="#003366"
          hoverBgColor="#002244"
          type={type}>{children}</StButton>
      </div> : size === "Medium" ?
        <div>
          <StButton
            border="none"
            height="40px"
            backgroundColor="teal"
            width="140px"
            color="#fff"
            fontweight="700"
            type={type}>{children}</StButton>
        </div> : size === "SmallDelete" ?
          <div>
            <StButton
              border="2px solid red"
              backgroundColor="#FFF"
              type={type}>{children}</StButton>
          </div> :
          <div>
            <StButton
              border="2px solid green"
              backgroundColor="#FFF"
              onClick={onClick}
              type={type}>{children}</StButton>
          </div>
  )
}

export default Button

const StButton = styled.button<StButtonProps>`
  border:${({ border }) => border};
  border-radius:8px;
  width: ${({ width }) => width};
  height:${({ height }) => height};
  margin-top:${({ marginTop }) => marginTop};
  font-weight:${({ fontweight }) => fontweight};
  color:${({ color }) => color};
  background-color:${({ backgroundColor }) => backgroundColor};
  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor};
  }
`

export { StButton }
