// import React from "react";

// const PeopleDetails = () => {
//   return <div>PeopleDetails</div>;
// };

// export default PeopleDetails;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadMovieFun } from "../redux/movieActions";
import { removeMovie } from "../redux/movieSlice";

const PeopleDetails = () => {
  const genre = "person"
  const { id } = useParams();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.movie);
  const data = selector.info?.detail;
  console.log();
  // useEffect(() => {
  //   dispatch(loadMovieFun(id));
  // }, []);
  useEffect(() => {
    dispatch(loadMovieFun(id,genre));

    return () => {
      dispatch(removeMovie());
    };
  }, []);

  return (
    <div>
      <div
        className="w-full h-[80vh] items-center  justify-center  "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(https://image.tmdb.org/t/p/original/${data?.backdrop_path || data?.poster_path})`,

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "lighten",
        }}
      >
        <div className="flex flex-col opacity-95">
          <h1 className="text-white font-extrabold text-7xl mt-[40vh] ml-20    ">
            {data?.original_title || data?.original_name}
          </h1>
          <h1 className="font-medium text-lg w-2/3 mt-2 leading-tight ml-20   text-white">
            {data?.overview}
          </h1>
          <button className=" bg-white text-black ml-20 mt-6 font-semibold w-36 h-12 hover:text-lg rounded transition-all hover:scale-105 text-xl italic  ">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleDetails;