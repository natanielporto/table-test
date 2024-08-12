import styled from "styled-components";

export const Wrapper = styled.select`
  appearance: none;
  outline: none;
  cursor: pointer;

  border: 2px solid ${({ theme }) => theme.colors.darkBackground};

  border-radius: 5px;
  width: 200px;
  box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.shadow};

  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
