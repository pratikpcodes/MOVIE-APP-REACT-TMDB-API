import React, { useState } from "react";
import axios from "./Api/Axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { useLocation } from "react-router-dom";
const Body = () => {
  const [bgImage, setbgImage] = useState("");
  const [descp, setdescp] = useState([]);
  const [trend, setTrend] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const {pathname} = useLocation()
  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    console.log("Selected option is:" + selectedOption);
  };

  const data = async () => {
    try {
      const { data } = await axios.get(
        `trending/all/day?api_key=2097a5a28a7485de0b3eee9dc349c0aa`
      );
      // https://api.themoviedb.org/3/search/multi?api_key=2097a5a28a7485de0b3eee9dc349c0aa&query=salar

      let imageData =
        data.results[Math.floor(Math.random() * data.results.length)];
      setdescp(imageData);
      setbgImage(imageData.backdrop_path);
      setTrend(data.results);
      console.log(data);
    } catch (error) {
      console.log("Error in Body::  " + error + ":::");
    }
  };
  useEffect(() => {
    data();
    // console.log("Hello  I am use Effect from body");
  }, []);
  return bgImage ? (
    <div className="h-full min-w-full ">
      <div
        className="w-full h-[80vh] items-center  justify-center  "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(https://image.tmdb.org/t/p/original${bgImage})`,

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "lighten",
        }}
      >
        <div className="flex flex-col opacity-95">
          <h1 className="text-white font-extrabold text-7xl mt-[40vh] ml-20    ">
            {descp.original_title || descp.original_name}
          </h1>
          <h1 className="font-medium text-lg w-2/3 mt-2 leading-tight ml-20   text-white">
            {descp.overview}
          </h1>
          <Link
            to={`${descp.media_type}/details/${descp.id}/trailer`}
            className=" bg-white text-black ml-20 mt-6 font-semibold w-32 h-12 p-2 hover:text-lg rounded transition-all hover:scale-105 text-xl italic  "
          >
            Watch Now
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between h-[8vh] bg-slate-900 text-white font-serif font-semibold  ">
        <h1 className="text-3xl italic ml-10 ">Trending{"=>"}</h1>

        {/* <div className="mr-20 flex flex-col relative items-center">
          <img
            className="w-5 h-5 ml-2 bg-white rounded-lg"
            src="src\assets\filter.png"
            alt=""
          />
        </div> */}

        <div className="relative text-black mr-14">
          <select
            value={selectedOption}
            onChange={handleChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="Filter">Filter</option>
            <option value="TV">TV</option>
            <option value="Movie">Movie</option>
            <option value="All">All</option>
          </select>
        </div>
      </div>

      <div className="text-white flex flex-row overflow-x-auto h-[30vh] bg-slate-950 transition-all duration-500  ">
        {(selectedOption === "All" ||
          selectedOption === "Filter" ||
          selectedOption === "") &&
          trend.map((item, index) => (
            // item.media_type==="movie"&&(
            <Link
              to={`/${item.media_type}/details/${item.id}`}
              key={index}
              className="flex flex-col "
            >
              <div
                className="overflow-auto w-64 h-40 mx-2 rounded-sm bg-slate-500 flex bg-opacity-5"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div className="border-8 h-[0px] border-black text-white bg-slate-900 transition-all duration-300">
                <h1>{item.original_name || item.original_title}</h1>
                <h1 className="overflow-hidden whitespace-nowrap overflow-ellipsis w-[200px]">
                  {item.overview}
                </h1>
              </div>
            </Link>
            // )
          ))}

        {selectedOption === "TV" &&
          trend.map(
            (item, index) =>
              item.media_type !== "movie" && (
                <Link
                  to={`/${item.media_type}/details/${item.id}`}
                  key={index}
                  className="flex flex-col "
                >
                  <div
                    className="overflow-auto w-64 h-40 mx-2 rounded-sm bg-slate-500 flex "
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  <div className="border-8 h-[0px] border-black text-white bg-slate-900 transition-all duration-300">
                    <h1>{item.original_name || item.original_title}</h1>
                    <h1 className="overflow-hidden whitespace-nowrap overflow-ellipsis w-[200px]">
                      {item.overview}
                    </h1>
                  </div>
                </Link>
              )
          )}

        {selectedOption === "Movie" &&
          trend.map(
            (item, index) =>
              item.media_type === "movie" && (
                <Link
                  to={`/${item.media_type}/details/${item.id}`}
                  key={index}
                  className="flex flex-col "
                >
                  <div
                    className="overflow-auto w-64 h-40 mx-2 rounded-sm bg-slate-500 flex "
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="border-8 h-[0px] border-black text-white bg-slate-900 transition-all duration-300">
                    <h1>{item.original_name || item.original_title}</h1>
                    <h1 className="overflow-hidden whitespace-nowrap overflow-ellipsis w-[200px]">
                      {item.overview}
                    </h1>
                  </div>
                </Link>
              )
          )}
      </div>

      {/* 
      <div className="flex items-center justify-between h-[8vh] bg-slate-900 text-white font-serif font-semibold  ">
        <h1 className="text-3xl italic ml-10 ">TV</h1>
      </div>

      <div className="text-white flex flex-row overflow-x-auto bg-slate-950">
        {trend.map((item, index) => (
          <div key={index} className="flex ">
            <div
              className="overflow-auto w-64 h-40 mx-2 rounded-sm bg-slate-500 flex "
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className=" text-white mt-20 ">lksjklj</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between h-[8vh] bg-slate-900 text-white font-serif font-semibold  ">
        <h1 className="text-3xl italic ml-10 ">Movie</h1>
      </div>

      <div className="text-white flex flex-row overflow-x-auto bg-slate-950">
        {trend.map((item, index) => (
          <div key={index} className="flex ">
            <div
              className="overflow-auto w-64 h-40 mx-2 rounded-sm bg-slate-500 flex "
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className=" text-white mt-20 ">lksjklj</h1>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  ) : (
    <Loader />
  );
  // <div className="h-full  min-w-full ">
  //   <div
  //     className="w-full h-screen"
  //     style={{
  //       backgroundImage: `url(https://image.tmdb.org/t/p/original${bgImage})`,
  //       backgroundSize: "cover",
  //       backgroundPosition: "center",
  //       backgroundBlendMode: "lighten",
  //     }}
  //   >
  //     <h1 className=" text-white font-extrabold text-7xl ">
  //       {descp.original_title || descp.original_name}
  //     </h1>
  //     <h1 className=" font-medium text-lg w-2/3 mt-2 leading-tight">
  //       {descp.overview}
  //     </h1>
  //     helo
  //   </div>
  //   {/* <div className=" flex flex-row ">
  //     {trend.map((item, index) => (
  //       <div className="flex">
  //         <img
  //           className="w-[40vh]  bg-slate-500  "
  //           src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
  //           alt=""
  //         />
  //       </div>
  //     ))}
  //   </div> */}
  //   <div className="flex flex-row">
  //     {trend.map((item, index) => (
  //       <div key={index} className="flex">
  //         <img
  //           style={{ width: "300px" }} // Adjust the width inline
  //           className="h-auto bg-slate-500"
  //           src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
  //           alt=""
  //         />
  //       </div>
  //     ))}
  //   </div>
  // </div>
};

export default Body;

{
  /* <div className=" relative bg-red-600 ">
<div
  className="BG-IMAGE   h-[80vh] w-screen m-0 opacity-80 "
  style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/original${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "lighten",
  }}
>
  <div className="relative mt-96    ml-16 opacity-100">
    
    <button className=" bg-white text-black font-semibold w-36 h-12 hover:text-lg rounded transition-all hover:scale-105 text-xl italic mt-4 ">
      Watch Now
    </button>
  </div>
  <div className=" relative bg-slate-950 flex-row overflow-auto w-full flex my-10 mx-5 text-black mt-[15vh]">
    {trend.map((item, index) => (

 
      <img
        className="w-[40vh]  bg-slate-500  "
        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        alt=""
      />

      
      
  
      
    ))}
  </div>
</div>
</div> */
}
