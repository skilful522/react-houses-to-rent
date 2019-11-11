import React from "react";
import { connect } from "react-redux";
import { Rent } from "../components/AdsList/Item/Rent/Rent";
import { setFlat } from "../redux/actions/RentActions";
import { updateFlats } from "../redux/actions/AppActions";

const RentContainer = props => {
  const { setFlat, price, flats, updateFlats } = props;
  return (
    <Rent
      price={price}
      setFlat={setFlat}
      item={props.item}
      flats={flats}
      updateFlats={updateFlats}
    />
  );
};

const mapStateToProps = store => {
  return {
    rent: store.rent,
    flats: store.app.flats
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFlat: favoriteFlat => dispatch(setFlat(favoriteFlat)),
    updateFlats: newFlats => dispatch(updateFlats(newFlats))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RentContainer);
