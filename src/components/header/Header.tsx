import styled from "styled-components";
import Weather from '../header/Weather';
import { StLink } from "../../pages/accountmanagement/StyledAccount";

function Header() {
    return (
        <>
            <StHeaderMsg>
                <div>황태영 미니프로젝트</div><StLink to="/login">로그아웃</StLink>
            </StHeaderMsg>
            <StContainer>
                <div>My Todo List</div>
                <div><Weather /></div>
            </StContainer>
        </>
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

const StHeaderMsg = styled.div`
    display:flex;
    justify-content:space-between
`
