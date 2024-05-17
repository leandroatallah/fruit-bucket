import styled from "styled-components";

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputForm = ({ id, label, type, ...rest }: InputFormProps) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} {...rest} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 4px;
`;

const Input = styled.input`
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px;
  width: 100%;
  background-color: #fff;
  height: 40px;
`;

export default InputForm;
