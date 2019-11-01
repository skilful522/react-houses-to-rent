import React from "react";
import fetchJsonp from "fetch-jsonp";
import { useState, useEffect } from "react";

function dataProcessing(data, props) {
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
  const flatPrice = receivedFlats.map(
    flat => `${flat["price_formatted"]} ${flat["price_type"]}`
  );
  const flatSummary = receivedFlats.map(flat => flat["summary"]);

  props.getFlats([
    flatImages,
    flatTitles,
    flatProperties,
    flatSummary,
    flatPrice
  ]);
}

const dataHelper = {
  useFetch: (url, props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const fetchData = () => {
      fetchJsonp(url)
        .then(response => response.json())
        .then(data => {
          if (
            data.response["application_response_text"] === "unknown location"
          ) {
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
  },
  constructQueryParams: ({ searchInput }) => {
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
};

export { dataHelper };
