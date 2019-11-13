import React from "react";
import { useState } from "react";
import { Header } from "./Header/Header";
import { AdsList } from "./AdsList/AdsList";
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { NotFoundPage } from "./Header/NavBar/NotFoundPage/NotFoundPage";
import { Pagination } from "./Pagination/Pagination";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import uuidv4 from "uuid/v4";
import FavoriteListContainer from "../containers/FavoriteListContainer";

const App = props => {
  const { searchInput } = props;
  const [flats, setFlats] = useState([]);
  const [item, setItem] = useState(null);
  const [favItems, setFavItem] = useState([]);
  let [portionNumber, setPortionNumber] = useState(1);
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
        <Header setPortionNumber={setPortionNumber} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <AdsList
                getFlats={handleNewFlats}
                flats={flats}
                searchInput={searchInput}
                currentPage={props.currentPage}
                getItem={handleItemPage}
                getFavItem={handleFavItem}
                pageSize={props.pageSize}
                setTotalPages={props.setTotalPages}
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
        <Pagination
          pageSize={props.pageSize}
          portionNumber={portionNumber}
          setPortionNumber={setPortionNumber}
          setTotalPages={props.setTotalPages}
          currentPage={props.currentPage}
          totalPages={props.totalPages}
          setCurrentPage={props.setCurrentPage}
        />
      </div>
    </Router>
  );
};

export { App };
