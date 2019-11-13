import React from "react";
import { connect } from "react-redux";
import { App } from "../components/App";
import { getFlats } from "../redux/actions/AppActions";
import { setCurrentPage } from "../redux/actions/AppActions";
import { setTotalPages } from "../redux/actions/AppActions";

const AppContainer = props => {
  const {
    search,
    pageSize,
    currentPage,
    getFlats,
    setCurrentPage,
    setTotalPages
  } = props;
  return (
    <App
      searchInput={search.searchInput}
      getFlats={getFlats}
      setCurrentPage={setCurrentPage}
      setTotalPages={setTotalPages}
      pageSize={pageSize}
      totalPages={props.totalPages}
      currentPage={currentPage}
    />
  );
};

const mapStateToProps = store => {
  return {
    search: store.search,
    pageSize: store.app.pageSize,
    totalPages: store.app.totalPages,
    currentPage: store.app.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFlats: flats => dispatch(getFlats(flats)),
    setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage)),
    setTotalPages: totalItemsCount => dispatch(setTotalPages(totalItemsCount))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
