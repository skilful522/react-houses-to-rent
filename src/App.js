import React from "react";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { AdsList } from "./components/AdsList/AdsList";
import { FavoriteList } from "./components/FavoriteList/FavoriteList";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";
import { NotFoundPage } from "./components/Header/NavBar/NotFoundPage/NotFoundPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import uuidv4 from "uuid/v4";

const App = () => {
  const [flats, setFlats] = useState([]);
  const [searchInput, setSearchInput] = useState("London");
  const [item, setItem] = useState(null);
  const handleNewFlats = newFlats => {
    let flatInfo = [];
    let [images, titles, properties, summaries, prices] = [...newFlats];

    for (let i = 0; i < images.length; i++) {
      let flat = {
        image: "",
        title: "",
        property: "",
        summary: "",
        price: "",
        key: ""
      };

      flat.image = images[i];
      flat.title = titles[i];
      flat.property = properties[i];
      flat.summary = summaries[i];
      flat.price = prices[i];
      flat.key = uuidv4();
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
  const handleItemPage = item => {
    setItem(item);
  };
  return (
    <Router>
      <div className="App">
        <Header onSearchChange={handleSearch} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <AdsList
                getFlats={handleNewFlats}
                flats={flats}
                searchInput={searchInput}
                getItem={handleItemPage}
              />
            )}
          />
          <Route exact path="/favorite" component={FavoriteList} />
          <Route
            exact
            path="/flats/:id"
            render={() => <ItemDetail item={item} />}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
