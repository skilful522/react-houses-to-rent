import React from "react";
import { connect } from "react-redux";
import { removeFlat } from "../redux/actions/FavListActions";
import { FavoriteList } from "../components/FavoriteList/FavoriteList";

const FavoriteListContainer = props => {
  const { favoriteFlats, removeFlat } = props;
  return <FavoriteList favoriteFlats={favoriteFlats} removeFlat={removeFlat} />;
};

const mapStateToProps = store => {
  return {
    favoriteFlats: store.rent.favoriteFlats,
    favList: store.favList
  };
};

const mapDispatchToState = dispatch => {
  return {
    removeFlat: favoriteFlats => dispatch(removeFlat(favoriteFlats))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToState
)(FavoriteListContainer);
