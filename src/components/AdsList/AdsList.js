import React from "react";
import { Loader } from "./Loader/Loader";
import { Warning } from "./Warning/Warning";
import { Item } from "./Item/Item";
import style from "./AdsList.module.css"
import uuidv4 from "uuid/v4";
import {dataHelper} from "../../utils/data.helper";

const AdsList = props => {
  const url = constructQueryParams(props);
  const {loading, error } = dataHelper.useFetch(url, props);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div id={style["adsList"]}>
          {error ? (
            <Warning />
          ) : (
            props.flats.map(item => (
              <Item
                image={item.flatImage}
                title={item.flatTitle}
                property={item.flatProperty}
                summary={item.flatSummary}
                price={item.flatPrice}
                key={uuidv4()}
              />
            ))
          )}
        </div>
      )}
    </>
  );
};

function constructQueryParams({ searchInput }) {
  const url = "https://api.nestoria.co.uk/api?";
  let params = new URLSearchParams();

  params.append("encoding", "json");
  params.append("pretty", "1");
  params.append("action", "search_listings");
  params.append("country", "uk");
  params.append("listing_type", "rent");
  params.append("page", `1`);
  params.append("place_name", `${searchInput}`);
  return url + params;
}

export { AdsList };
