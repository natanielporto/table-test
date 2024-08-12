export type HeaderProps = string[];

export type CarProps = {
  model: string;
  maker: string;
  year: string;
  transmission: string;
};

export interface CarData {
  headers: HeaderProps;
  cars: CarProps[];
}

export type GlobalContextProps = {
  originalData: CarData;
  headers: HeaderProps;
  cars: CarProps[];
  filters: {
    model: string;
    maker: string;
    year: string;
    transmission: string;
  };
  filterByModel: (model: string) => void;
  filterByMaker: (maker: string) => void;
  filterByYear: (year: string) => void;
  filterByTransmission: (transmission: string) => void;
  resetFullData: () => void;
};
