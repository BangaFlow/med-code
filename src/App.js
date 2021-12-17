import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import data from "./dataset.json";
import logo from './logo.png';

const center = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function App() {
  const [search, setSearch] = useState("");
  const drugs = data.drugs;
  const filteredDrugs = drugs.filter(
    ({ name, diseases }) =>
      name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      diseases.some((disease) =>
        disease.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
  );

  useEffect(() => {}, [search]);

  return (
    <div style={center}>
      <div style={{width: '34rem', padding: '30px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <img src={logo} alt="" height={96} width={96} />
        <a href="/">External link</a>
      </div>
      <SearchBar setSearch={setSearch}></SearchBar>
      <div style={{ width: "34rem", padding: "10px 0" }}>
        Showing {filteredDrugs.length} results
      </div>
      {filteredDrugs.map((drug) => {
        return <Card key={drug.id} drug={drug}></Card>;
      })}
    </div>
  );
}

export default App;
