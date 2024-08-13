import styled from "styled-components";
import { Link } from "react-router-dom";

const StTodoContainer = styled.form`
    width: 270px;
    border: 4px solid teal;
    border-radius: 12px;
    padding: 12px 24px 24px 24px;
`

const StButtonSet = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 24px;
`

const StTodoDeleteButton = styled.button`
    border: 2px solid red;
    background-color: #fff;
    border-radius:5px
`

const StTodoCompleteButton = styled.button`
    border: 2px solid green;
    background-color: #fff;
    border-radius:5px
`

const StLink = styled(Link)`
    text-decoration: none;
`

export { StTodoContainer, StButtonSet, StTodoDeleteButton, StTodoCompleteButton,StLink }