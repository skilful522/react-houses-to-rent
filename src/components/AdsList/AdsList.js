import React from "react";
import { Loader } from "./Loader/Loader";
import { Warning } from "./Warning/Warning";
import { Item } from "./Item/Item";
import style from "./AdsList.module.css";
import uuidv4 from "uuid/v4";
import { dataHelper } from "../../utils/data.helper";

const AdsList = props => {
  const url = dataHelper.constructQueryParams(props);
  const { loading, error } = dataHelper.useFetch(url, props);

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <Warning />;
  } else {
    return (
      <div id={style["adsList"]}>
        {props.flats.map(item => (
          <Item
            image={item.flatImage}
            title={item.flatTitle}
            property={item.flatProperty}
            summary={item.flatSummary}
            price={item.flatPrice}
            key={uuidv4()}
          />
        ))}
      </div>
    );
  }
};

export { AdsList };
