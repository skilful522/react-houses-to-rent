import React from "react";
import { connect } from "react-redux";
import { Search } from "../components/Search/Search";
import { getSearchInput } from "../redux/actions/SearchActions";

const SearchContainer = props => {
  const { searchInput, getSearchInput } = props;
  return (
    <Search
      searchInput={searchInput}
      getSearchInput={getSearchInput}
      placeholder="search"
    />
  );
};

const mapStateToProps = store => {
  return {
    searchInput: store.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchInput: searchInput => dispatch(getSearchInput(searchInput))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
