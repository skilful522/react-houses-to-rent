import React from "react";
import { connect } from "react-redux";
import { Search } from "../components/Search/Search";
import { getSearchInput } from "../redux/actions/SearchActions";
import { setCurrentPage } from "../redux/actions/AppActions";

const SearchContainer = props => {
  const { searchInput, getSearchInput, setCurrentPage } = props;
  return (
    <Search
      searchInput={searchInput}
      getSearchInput={getSearchInput}
      setCurrentPage={setCurrentPage}
      setPortionNumber={props.setPortionNumber}
      placeholder="search"
    />
  );
};

const mapStateToProps = store => {
  return {
    searchInput: store.search,
    currentPage: store.app.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchInput: searchInput => dispatch(getSearchInput(searchInput)),
    setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
