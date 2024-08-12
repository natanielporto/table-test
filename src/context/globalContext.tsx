import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { CarData, GlobalContextProps } from "./types";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

const initialData: CarData = {
  headers: [],
  cars: [],
};

export const GlobalContext = createContext<GlobalContextProps | null>(null);

export default function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [originalData, setOriginalData] = useState<CarData>(initialData);
  const [headers, setHeaders] = useState(initialData.headers);
  const [cars, setCars] = useState(initialData.cars);
  const [filters, setFilters] = useState({
    model: "",
    maker: "",
    year: "",
    transmission: "",
  });

  const retrieveData = useCallback(async () => {
    const response = await fetch("/data.json");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    setOriginalData(data);
    setHeaders(data.headers);
    setCars(data.cars);
  }, []);

  useEffect(() => {
    retrieveData();
  }, [retrieveData]);

  const filterByModel = useCallback(
    (model: string) => {
      if (model === "Model") {
        setCars(originalData.cars);
      } else {
        setFilters((prevFilters) => ({ ...prevFilters, model }));
        setCars(originalData.cars.filter((item) => item.model === model));
      }
    },
    [originalData.cars]
  );

  const filterByMaker = useCallback(
    (maker: string) => {
      if (maker === "Maker") {
        setCars(originalData.cars);
      } else {
        setFilters((prevFilters) => ({ ...prevFilters, maker }));
        setCars(originalData.cars.filter((item) => item.maker === maker));
      }
    },
    [originalData.cars]
  );

  const filterByYear = useCallback(
    (year: string) => {
      if (year === "Year") {
        setCars(originalData.cars);
      } else {
        setFilters((prevFilters) => ({ ...prevFilters, year }));
        setCars(originalData.cars.filter((item) => item.year === year));
      }
    },
    [originalData.cars]
  );

  const filterByTransmission = useCallback(
    (transmission: string) => {
      if (transmission === "Transmission") {
        setCars(originalData.cars);
      } else {
        setFilters((prevFilters) => ({ ...prevFilters, transmission }));
        setCars(
          originalData.cars.filter((item) => item.transmission === transmission)
        );
      }
    },
    [originalData.cars]
  );

  const resetFullData = useCallback(() => {
    setCars(originalData.cars);
    setFilters({
      model: "Model",
      maker: "Maker",
      year: "Year",
      transmission: "Transmission",
    });
  }, [originalData]);

  return (
    <GlobalContext.Provider
      value={{
        originalData,
        headers,
        cars,
        filters,
        filterByModel,
        filterByMaker,
        filterByYear,
        filterByTransmission,
        resetFullData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a ThemeContextProvider."
    );
  }
  return context;
}
