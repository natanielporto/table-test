import { HeaderElements } from "./components/HeaderElements";
import { Table } from "./components/table";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const { headers, cars } = useGlobalContext();

  return (
    <div>
      <h1>Choose your filter</h1>
      <HeaderElements />
      <Table headers={headers} cars={cars} />
    </div>
  );
}

export default App;
