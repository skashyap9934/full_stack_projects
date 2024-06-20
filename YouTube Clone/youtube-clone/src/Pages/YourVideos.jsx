// Packages
import React, { useContext, useEffect, useState } from "react";

import { getYourVideos } from "../API/fetchData";

import SideLinks from "../Components/SideLinks";

import Cards from "../Components/Cards";

import { AuthenticationContext } from "../Contexts/AuthenticationContextProvider";

export default function YourVideos() {
  const [data, setData] = useState([]);
  const { updateQuery } = useContext(AuthenticationContext);

  const getData = async () => {
    const response = await getYourVideos();
    setData([...response]);
  };

  useEffect(() => {
    getData();
    updateQuery("");
  }, []);

  return (
    <div className="YourVideos">
      <SideLinks />
      <div className="SearchResult">
        {data.map((video) => (
          <Cards {...video} key={video.id} target={"uploads"} />
        ))}
      </div>
    </div>
  );
}
