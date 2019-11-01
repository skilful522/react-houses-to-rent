import React from "react";
import { Loader } from "./Loader/Loader";
import { Warning } from "./Warning/Warning";
import { Item } from "./Item/Item";
import style from "./AdsList.module.css";
import uuidv4 from "uuid/v4";
import fetchJsonp from "fetch-jsonp";
import { dataHelper, dataProcessing } from "../../utils/data.helper";
import { useState, useEffect } from "react";

const useFetch = (url, props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = () => {
    fetchJsonp(url)
      .then(response => response.json())
      .then(data => {
        if (data.response["application_response_text"] === "unknown location") {
          setError(true);
          setLoading(false);
        } else {
          setError(false);
          setData(data);
          dataProcessing(data, props);
          setLoading(false);
        }
      });
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};

const AdsList = props => {
  const url = dataHelper.constructQueryParams(props);
  const { loading, error } = useFetch(url, props);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Warning />;
  }
  {
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
