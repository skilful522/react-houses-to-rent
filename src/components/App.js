import React from "react";
import { useState } from "react";
import { Header } from "./Header/Header";
import { AdsList } from "./AdsList/AdsList";
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { NotFoundPage } from "./Header/NavBar/NotFoundPage/NotFoundPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import uuidv4 from "uuid/v4";
import FavoriteListContainer from "../containers/FavoriteListContainer";

const App = props => {
  const { searchInput } = props;
  const [flats, setFlats] = useState([]);
  const [item, setItem] = useState(null);
  const [favItems, setFavItem] = useState([]);
  const handleNewFlats = newFlats => {
    let flatInfo = [];
    let [images, titles, properties, summaries, prices] = [...newFlats];

    for (let i = 0; i < images.length; i++) {
      let flat = {
        image: images[i],
        title: titles[i],
        property: properties[i],
        summary: summaries[i],
        price: prices[i],
        key: uuidv4(),
        isAdded: false
      };

      flatInfo.push(flat);
    }
    setFlats(flatInfo);
    props.getFlats(flatInfo);
  };
  const handleItemPage = item => setItem(item);
  const handleFavItem = favItem => setFavItem([favItem, ...favItems]);
  return (
    <Router>
      <div className="App">
        <Header />
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
                getFavItem={handleFavItem}
              />
            )}
          />
          <Route exact path="/favorite" component={FavoriteListContainer} />
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

export { App };
