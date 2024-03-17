import React, { useState } from "react";
import axios from "./Api/Axios";
import Cards from "./Cards";
import { useEffect } from "react";
import DropDown from "./DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import { set } from "react-hook-form";
import Loader from "./Loader"
const TVShows = () => {
  const [cardData, setcardData] = useState([]);
  const [Category, setCategory] = useState("airing_today");
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const data = async () => {
    try {
      const { data } = await axios.get(
        `tv/${Category}?api_key=2097a5a28a7485de0b3eee9dc349c0aa&page=${page}`
        // 
      );
      // https://api.themoviedb.org/3/search/multi?api_key=2097a5a28a7485de0b3eee9dc349c0aa&query=salar
      if (data.results.length > 0) {
        setcardData((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else sethasmore(false);
      // setcardData(data.results);
      console.log(data.results);
    } catch (error) {
      console.log("Error in Body::  " + error + ":::");
    }
  };

  const handleRepeatScroll = () => {
    if (cardData.length === 0) {
      data();
    } else {
      setpage(1);
      setcardData([]);
      data();
    }
  };
  useEffect(() => {
    handleRepeatScroll();
    console.log("Hello  I am use Effect from trending");
  }, [Category]);
  return cardData.length > 0 ? (
    <div className="w-screen  h-full bg-slate-900 ">
      
      <DropDown
        fun={(e) => setCategory(e.target.value)}
        title="Category"
        options={["airing_today", "popular", "top_rated","on_the_air"]}
        value={Category}
      />

      <InfiniteScroll
        dataLength={cardData.length}
        next={data}
        hasMore={hasmore}
      >
        <Cards data={cardData} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default TVShows