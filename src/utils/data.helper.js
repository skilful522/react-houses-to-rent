import fetchJsonp from "fetch-jsonp";
function dataProcessing(data, props) {
  const receivedFlats = data.response.listings;
  const flatImages = receivedFlats.map(flat => flat["img_url"]);
  const flatTitles = receivedFlats.map(flat => flat["title"]);
  const flatProperties = receivedFlats.map(flat => {
    return [
      data.request.location,
      " • ",
      flat["bedroom_number"],
      " Bedroom • ",
      flat["bathroom_number"],
      " Bath •",
      " ",
      flat["property_type"],
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
  },
  fetch: url => fetchJsonp(url).then(response => response.json())
};

export { dataHelper, dataProcessing };
