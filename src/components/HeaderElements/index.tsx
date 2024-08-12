import { useGlobalContext } from "../../context/globalContext";
import { Button } from "../Button";
import { Select } from "../select";
import * as S from "./styles";

export const HeaderElements = () => {
  const {
    originalData,
    filters,
    filterByModel,
    filterByMaker,
    filterByYear,
    filterByTransmission,
    resetFullData,
  } = useGlobalContext();

  const carsByModel = [
    "Model",
    ...new Set(originalData.cars.map((car) => car.model).sort()),
  ];
  const carsByMaker = [
    "Maker",
    ...new Set(originalData.cars.map((car) => car.maker).sort()),
  ];
  const carsByYears = [
    "Year",
    ...new Set(originalData.cars.map((car) => car.year).sort()),
  ];
  const carsByTransmission = [
    "Transmission",
    ...new Set(originalData.cars.map((car) => car.transmission).sort()),
  ];

  const createOptions = (array: string[]) => {
    return array.map((item) => ({
      value: String(item),
      label: String(item),
    }));
  };

  return (
    <S.Wrapper>
      <Select
        options={createOptions(carsByModel)}
        value={filters.model}
        onChange={(model) => filterByModel(model)}
      />
      <Select
        options={createOptions(carsByMaker)}
        value={filters.maker}
        onChange={(maker) => filterByMaker(maker)}
      />
      <Select
        options={createOptions(carsByYears)}
        value={filters.year}
        onChange={(year) => filterByYear(year)}
      />
      <Select
        options={createOptions(carsByTransmission)}
        value={filters.transmission}
        onChange={(transmission) => filterByTransmission(transmission)}
      />
      <Button action={resetFullData}>Reset Information</Button>
    </S.Wrapper>
  );
};
