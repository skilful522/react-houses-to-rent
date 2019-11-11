import React from "react";
import { connect } from "react-redux";
import { FavoriteList } from "../components/FavoriteList/FavoriteList";

const FavoriteListContainer = props => {
  const { favoriteFlats } = props;
  return <FavoriteList favoriteFlats={favoriteFlats} />;
};

const mapStateToProps = store => {
  return {
    favoriteFlats: store.rent.favoriteFlats
  };
};

export default connect(mapStateToProps)(FavoriteListContainer);
