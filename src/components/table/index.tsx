import { useCallback, useState } from "react";
import { CarProps, HeaderProps } from "../../context/types";
import { FaChevronDown, FaChevronUp, FaPlus, FaMinus } from "react-icons/fa";
import { CarAttributes } from "./headers-enums";
import { Button } from "../Button";
import * as S from "./styles";

type TableProps = {
  headers: HeaderProps;
  cars: CarProps[];
};

export const Table = ({ headers, cars }: TableProps) => {
  const [hiddenRows, setHiddenRows] = useState<Set<number>>(new Set());
  const [hiddenColumns, setHiddenColumns] = useState<Set<string>>(new Set());
  const [zebraTable, setZebratable] = useState(true);

  const handleToggleRow = useCallback((index: number) => {
    setHiddenRows((prevHiddenRows) => {
      const newHiddenRows = new Set(prevHiddenRows);
      if (newHiddenRows.has(index)) {
        newHiddenRows.delete(index);
      } else {
        newHiddenRows.add(index);
      }
      return newHiddenRows;
    });
  }, []);

  const isRowHidden = useCallback(
    (index: number) => hiddenRows.has(index),
    [hiddenRows]
  );

  const handleToggleColumn = useCallback(
    (column: string) => {
      if (hiddenColumns.has(column)) {
        setHiddenColumns((prevHiddenColumns) => {
          const newHiddenColumns = new Set(prevHiddenColumns);
          newHiddenColumns.delete(column);
          return newHiddenColumns;
        });
      } else {
        setHiddenColumns((prevHiddenColumns) => {
          const newHiddenColumns = new Set(prevHiddenColumns);
          newHiddenColumns.add(column);
          return newHiddenColumns;
        });
      }
    },
    [hiddenColumns]
  );

  const isColumnHidden = useCallback(
    (column: string) => hiddenColumns.has(column),
    [hiddenColumns]
  );

  if (!headers || !cars) {
    return <p>No data available</p>;
  }

  return (
    <S.Wrapper>
      <S.TableStyleButtonDiv>
        <Button action={() => setZebratable(!zebraTable)}>Table Style</Button>
      </S.TableStyleButtonDiv>
      <table>
        <thead>
          <S.HeaderTableRow>
            {headers.map((header) => (
              <S.HeaderWrapper key={header}>
                <S.HeaderTableHeader zebraTable={zebraTable}>
                  {header}
                </S.HeaderTableHeader>
                {isColumnHidden(header) ? (
                  <FaChevronDown onClick={() => handleToggleColumn(header)} />
                ) : (
                  <FaChevronUp onClick={() => handleToggleColumn(header)} />
                )}
              </S.HeaderWrapper>
            ))}
          </S.HeaderTableRow>
        </thead>
        <tbody>
          {cars.map((body, index) => (
            <S.BodyTableRow key={index} zebraTable={zebraTable}>
              {isColumnHidden(CarAttributes.Model) ? (
                <S.BodyTableData />
              ) : (
                <S.BodyTableData>
                  {isRowHidden(index) ? "" : body.model}
                </S.BodyTableData>
              )}

              {isColumnHidden(CarAttributes.Maker) ? (
                <S.BodyTableData />
              ) : (
                <S.BodyTableData>
                  {isRowHidden(index) ? "" : body.maker}
                </S.BodyTableData>
              )}

              {isColumnHidden(CarAttributes.Year) ? (
                <S.BodyTableData />
              ) : (
                <S.BodyTableData>
                  {isRowHidden(index) ? "" : body.year}
                </S.BodyTableData>
              )}

              {isColumnHidden(CarAttributes.Transmission) ? (
                <S.BodyTableData />
              ) : (
                <S.BodyTableData>
                  {isRowHidden(index) ? "" : body.transmission}
                </S.BodyTableData>
              )}

              <S.BodyTableData>
                <Button action={() => handleToggleRow(index)} width={30}>
                  {isRowHidden(index) ? <FaPlus /> : <FaMinus />}
                </Button>
              </S.BodyTableData>
            </S.BodyTableRow>
          ))}
        </tbody>
      </table>
    </S.Wrapper>
  );
};
