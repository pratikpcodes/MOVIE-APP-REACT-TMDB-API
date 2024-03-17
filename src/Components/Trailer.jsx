import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import { loadMovieFun } from "../redux/movieActions";
import { removeMovie } from "../redux/movieSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";
const Trailer = () => {
  const [genrestate, setgenrestate] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { pathname } = useLocation();
  //   console.log(pathname);

  const genreFinder = () => {
    if (pathname.includes("movie")) setgenrestate("movie");
    else setgenrestate("tv");
  };

  useEffect(() => {
    genreFinder();
    dispatch(loadMovieFun(id, genrestate));

    return () => {
      dispatch(removeMovie());
    };
  }, [genrestate]);
  const selector = useSelector((state) => state.movie);
  const trailerData = selector.info?.videos;
  console.log("------------------------------------");
  console.log(selector);

  return (
    <div className="w-full bg-slate-950 justify-center items-center flex ">
      <div className="mt-20">
        <ReactPlayer
          controls
          height={800}
          width={1600}
          url={`https://www.youtube.com/watch?v=${trailerData?.key}`}
        />
      </div>
    </div>
  ) ;
};

export default Trailer;
