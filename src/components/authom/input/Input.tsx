import styled from "styled-components"

type UserProps = {
    htmlFor: string;
    id: string;
    type: string;
    placeholder: string;
    children: string;
    size: string;
    value?: string;
    onChange?: (e: any) => void
}

interface StInputProps {
    border: string;
    borderRadius: string;
    width: string;
    padding: string;
    marginTop?: string;
    marginBottom?: string;
    height: string;
}


function Input({ htmlFor, id, type, placeholder, children, size, value, onChange }: UserProps) {
    return (
        size === "Medium" ?
            <StInputContainer>
                <label htmlFor={htmlFor}>{children}</label>
                <StInput
                    border="1px solid gray"
                    borderRadius="8px"
                    width="95%"
                    height=''
                    padding='10px'
                    marginTop='5px'
                    marginBottom="15px"
                    id={id}
                    type={type}
                    placeholder={placeholder}
                />
            </StInputContainer> :
            <div>
                <StFormLabel htmlFor={htmlFor}>{children}</StFormLabel>
                <StInput
                    height="40px"
                    width="600px"
                    border="none"
                    borderRadius="12px"
                    padding="0 12px"
                    value={value}
                    onChange={onChange}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                />
            </div>
    )
}

export default Input

const StInput = styled.input<StInputProps>`
    border:${({ border }) => border};
    border-radius:${({ borderRadius }) => borderRadius};
    height:${({ height }) => height};
    width:${({ width }) => width};
    padding:${({ padding }) => padding};
    margin-top:${({ marginTop }) => marginTop};
    margin-bottom:${({ marginBottom }) => marginBottom};
`

const StInputContainer = styled.div`
  display:flex;
  flex-direction:column;
`

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  margin-right:30px;
`;



