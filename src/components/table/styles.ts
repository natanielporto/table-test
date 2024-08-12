import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
`;

export const TableStyleButtonDiv = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 0.5rem;
`;

export const HeaderTableRow = styled.tr`
  text-align: left;
`;

export const HeaderWrapper = styled.th`
  width: 25%;
  position: relative;

  svg {
    position: absolute;
    top: 3px;
    right: 5px;
  }
`;

export const HeaderTableHeader = styled.div<{ zebraTable: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme, zebraTable }) =>
    zebraTable ? theme.colors.darkBackground : theme.colors.lightBackground};
`;

export const BodyTableRow = styled.tr<{ zebraTable: boolean }>`
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.lightBackground};
  }

  &:nth-child(even) {
    background-color: ${({ theme, zebraTable }) =>
      zebraTable ? theme.colors.darkBackground : theme.colors.lightBackground};
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
`;

export const BodyTableData = styled.td`
  border: 1px solid ${({ theme }) => theme.colors.black};
`;
