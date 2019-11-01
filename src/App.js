import React from "react";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import {AdsList} from "./components/AdsList/AdsList";

const App = () => {
  const [flats, setFlats] = useState([]);
  const [searchInput, setSearchInput] = useState("London");
  const handleNewFlats = newFlats => {
    let flatInfo = [];
    let [images, titles, properties, summaries, prices] = [...newFlats];

    for (let i = 0; i < images.length; i++) {
      let flat = {
        flatImage: "",
        flatTitle: "",
        flatProperty: "",
        flatSummary: "",
        flatPrice: ""
      };

      flat.flatImage = images[i];
      flat.flatTitle = titles[i];
      flat.flatProperty = properties[i];
      flat.flatSummary = summaries[i];
      flat.flatPrice = prices[i];
      flatInfo.push(flat);
    }
    setFlats(flatInfo);
  };
  const handleSearch = searchInput => {
    if (searchInput === "") {
      searchInput = "London";
    }
    setSearchInput(searchInput);
  };
  return (
    <div className="App">
      <Header onSearchChange={handleSearch} />
      <AdsList
        getFlats={handleNewFlats}
        flats={flats}
        searchInput={searchInput}
      />
    </div>
  );
};

export default App;
