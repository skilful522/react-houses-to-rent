import React from "react";
import { Loader } from "./Loader/Loader";
import { Warning } from "./Warning/Warning";
import { Item } from "./Item/Item";
import style from "./AdsList.module.css";
import { dataHelper, dataProcessing } from "../../utils/data.helper";
import { useState, useEffect } from "react";

const useFetch = (url, props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = () => {
    dataHelper.fetch(url).then(data => {
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
  return (
    <div id={style["adsList"]}>
      {props.flats.map(item => (
        <Item
          image={item.image}
          title={item.title}
          property={item.property}
          summary={item.summary}
          price={item.price}
          key={item.key}
          id={item.key}
          item={item}
          getItem={props.getItem}
          getFavItem={props.getFavItem}
        />
      ))}
    </div>
  );
};

export { AdsList };
