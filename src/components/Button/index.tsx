import * as S from "./styles";

type ButtonProps = {
  children: React.ReactNode;
  action: () => void;
  width?: number;
};

export const Button = ({ children, action, width }: ButtonProps) => {
  return (
    <S.Button onClick={action} width={width || 200}>
      {children}
    </S.Button>
  );
};
