import styled from "styled-components";

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  margin-right:30px;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;


const StAddInput = styled.input`
  height: 40px;
  width: 600px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;

export {StFormLabel,StAddForm,StAddInput,StAddButton}