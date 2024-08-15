import { useNavigate, useParams } from "react-router-dom";
import *as Styled from './StyledDetail'
import { useTodoStore } from "../../zustand/bearsStore";

const Detail = () => {
    const navigate = useNavigate();
    const { todos } = useTodoStore(state => state)
    const { id } = useParams();
    const todoItemId = id ? todos.find(item=>item.id===+id) : undefined

    return (
        <Styled.StContainer>
            <Styled.StDialog>
                <div>
                    <Styled.StDialogHeader>
                        <div>ID :{id}</div>
                        <Styled.StButton
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Back
                        </Styled.StButton>
                    </Styled.StDialogHeader>
                    <Styled.StTitle>{todoItemId ? todoItemId.text : "할 일 메모를 찾을 수 없습니다."}</Styled.StTitle>
                </div>
            </Styled.StDialog>
        </Styled.StContainer>
    );
};

export default Detail;