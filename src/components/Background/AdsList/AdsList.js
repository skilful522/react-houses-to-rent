import React from "react";
import { useState, useEffect } from "react";
import fetchJsonp from "fetch-jsonp";
import { Loader } from "../Loader/Loader";
import { Warning } from "../Warning/Warning";
import { Item } from "./Item/Item";
import uuidv4 from "uuid/v4";

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

const dataProcessing = (data, props) => {
  const receivedFlats = data.response.listings;
  const flatImages = receivedFlats.map(flat => flat["img_url"]);
  const flatTitles = receivedFlats.map(flat => flat["title"]);
  const flatProperties = receivedFlats.map(flat => {
    return [
      <b>{data.request.location}</b>,
      " • ",
      flat["bedroom_number"],
      " Bedroom • ",
      flat["bathroom_number"],
      " Bath •",
      " ",
      <b>{flat["property_type"]}</b>,
      " • ",
      flat["keywords"]
    ];
  });
  const flatPrice = receivedFlats.map(flat => {
    return flat["price_formatted"] + " " + flat["price_type"];
  });
  const flatSummary = receivedFlats.map(flat => flat["summary"]);

  props.getFlats([
    flatImages,
    flatTitles,
    flatProperties,
    flatSummary,
    flatPrice
  ]);
};

const AdsList = props => {
  const url = constructQueryParams(props);
  const { data, loading, error } = useFetch(url, props);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div id="adsList">
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
