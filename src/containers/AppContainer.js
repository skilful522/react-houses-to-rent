import React from "react";
import { connect } from "react-redux";
import { App } from "../components/App";
import { getFlats } from "../actions/AppActions";

const AppContainer = props => {
  const { search, getFlats } = props;
  return <App searchInput={search.searchInput} getFlats={getFlats} />;
};

const mapStateToProps = store => {
  return {
    search: store.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFlats: flats => dispatch(getFlats(flats))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
