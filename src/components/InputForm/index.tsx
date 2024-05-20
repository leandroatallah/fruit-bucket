import * as S from "./InputForm.styles";

export interface InputFormProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  prefixText?: string;
}

const InputForm = ({
  id,
  label,
  type,
  prefixText,
  ...rest
}: InputFormProps) => {
  return (
    <S.Container>
      <S.Label htmlFor={id}>{label}</S.Label>
      <div style={{ position: "relative" }}>
        {prefixText && <S.PrefixText>{prefixText}</S.PrefixText>}
        <S.Input
          type={type}
          id={id}
          $prefixOffset={prefixText ? prefixText.length * 8 + 16 : 0}
          {...rest}
        />
      </div>
    </S.Container>
  );
};

export default InputForm;
