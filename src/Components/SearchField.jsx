import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "./Api/Axios";
import images from "../assets/images.jpg"
const SearchField = () => {
  const [first, setfirst] = useState([]);
  const [input, setinput] = useState([]);
  
  const data = async () => {
  
    try {
      const { data } = await axios.get(
        `search/multi?api_key=2097a5a28a7485de0b3eee9dc349c0aa&query=${input}`
      );
      // https://api.themoviedb.org/3/search/multi?api_key=2097a5a28a7485de0b3eee9dc349c0aa&query=salar
      console.log(data);
      setfirst(data.results);
    } catch (error) {
      console.log("Error in searchField::" + error + ":::");
    }
  };

  useEffect(() => {
    data();
    // console.log("Hello  I am use Effect");
  }, [input]);

  return (
    <div className=" flex flex-col absolute  z-10   justify-center items-center my-2 p-0 w-full mx-0">
      <div className="flex w-full justify-center ">
        <input
          onChange={(e) => {
            setinput(e.target.value);
          }}
          value={input}
          className=" border-none w-[66%] h-10 border-opacity-5  px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500  bg-slate-200 hover:bg-slate-900 hover:text-white transition-transform duration-300 hover:scale-95 "
          type="text"
          placeholder="Search Anything"
        />
        <button className="bg-gray-900 w-[4%]  text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all hover:scale-110 focus:outline-none focus:shadow-outline-blue">
          Search
        </button>
      </div>

      <div className="flex flex-col w-full  items-center top-44  max-h-96  overflow-auto">
        {input.length > 0 &&
          first.map((result, index) => (
            <Link  to= {`/${result.media_type}/details/${result.id}`}
              key={index}
              className="bg-white  hover:bg-slate-200  flex items-center justify-between    w-[70%] border-opacity-5  min-h-[20vh]
              px-4 py-2 border-8 rounded-md    "
            >
              {result.title || result.name}
              <div>
                <img
                  className=" w-[25vh] h-[20vh]  p-4 object-cover rounded-sm"
                  src={result.backdrop_path || result.poster_path || result.profile_path? `https://image.tmdb.org/t/p/original${
                    result.backdrop_path || result.poster_path || result.profile_path
                  }` : images }
                  alt="helo"
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SearchField;
