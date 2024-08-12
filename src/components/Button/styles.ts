import styled from "styled-components";

export const Button = styled.button<{ width: number }>`
  appearance: none;
  outline: none;
  cursor: pointer;

  border: 2px solid ${({ theme }) => theme.colors.darkBackground};

  border-radius: 5px;
  width: ${({ width }) => width}px;
  box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.shadow};

  font-size: 1rem;
  font-weight: bold;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;
