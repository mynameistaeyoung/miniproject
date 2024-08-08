import React from 'react'
import styled from "styled-components";
import Weather from '../header/Weather';

function Header() {
    return (
        <StContainer>
            <div>My Todo List</div>
            <div><Weather/></div>
        </StContainer>
    )
}

export default Header



const StContainer = styled.div`
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
`;