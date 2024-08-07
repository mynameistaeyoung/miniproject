import styled from "styled-components";
import { Link } from "react-router-dom";

type SizeProps = {
  size:string;
}

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


const StContainer = styled.div`
  border:1px solid gray;
  border-radius:8px;
  padding: 20px;
  background-color: white;
  width: 55%;
`
const StFooterMsg = styled.p`
    font-size:13px;
`

const StHeaderMsg = styled.div<SizeProps>`
  text-align:center;
  font-size:${props=>props.size};
  font-weight:bold;
  margin-bottom:15px;
`

const StLink = styled(Link)`
  color:#003366;
  text-decoration-line:none;
  &:hover {
    color: #002244;
  }
`

export { PageContainer, StContainer,  StLink,StFooterMsg,StHeaderMsg }