import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadMovieFun } from "../redux/movieActions";
import { removeMovie } from "../redux/movieSlice";
import { Link } from "react-router-dom";
import Cards from "./Cards";
const MovieDetails = () => {
  //copied scroll animation
  const scrollToBottom = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollStep = Math.PI / (windowHeight / 2);
    let scrollCount = 0;
    let scrollPosition = 0;

    function scrollAnimation() {
      if (scrollCount < windowHeight / 2) {
        scrollCount = scrollCount + 1;
        scrollPosition =
          scrollHeight -
          windowHeight +
          windowHeight * Math.sin(scrollCount * scrollStep);
        window.scrollTo(0, scrollPosition);
        requestAnimationFrame(scrollAnimation);
      }
    }

    requestAnimationFrame(scrollAnimation);
  };
 const {pathname} = useLocation()
  const [cards, setcards] = useState();
  const { id } = useParams();
  const genre = "movie";
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.movie);
  const data = selector.info?.detail;
  const cardData = selector.info?.similar;
  const cardData2 = selector.info?.recommendations;
  const rent = selector.info?.watchproviders?.rent;
  console.log("this is");
  console.log(cardData);

  // useEffect(() => {
  //   dispatch(loadMovieFun(id));
  // }, []);
  useEffect(() => {
    dispatch(loadMovieFun(id, genre));

    return () => {
      dispatch(removeMovie());
    };
  }, []);

  return (
    <div className="bg-slate-950    ">
      <div
        className="w-full absolute h-full items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
          opacity: 20,

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex grid-cols-2 items-center ">
        <div className="flex relative flex-col opacity-95 w-3/4">
          <h1 className="text-white font-extrabold text-7xl mt-[40vh] ml-20    ">
            {data?.original_title || data?.original_name}
          </h1>

          <h1 className="font-medium text-lg w-2/3 mt-2 leading-tight ml-20   text-white">
            {data?.overview}
          </h1>

          <h1 className="font-small text-md mt-2 ml-20 underline  flex">
            {data?.genres.map((item) => (
              <h1 className="text-[#a3a3a3] m-0">
                {item.name}&nbsp;{"|"}&nbsp;{" "}
              </h1>
            ))}
          </h1>

          <h1 className="font-medium text-lg w-2/3 mt-2 leading-tight ml-20   text-white">
            {data?.release_date} {data?.status}
            <Link
              className="font-medium text-lg w-2/3 mt-2 leading-tight  items-center   flex   text-white"
              to={`https://www.imdb.com/title/${data?.imdb_id}`}
            >
              <img
                className="w-10 h-10"
                src="https://cdn-icons-png.flaticon.com/128/889/889199.png"
                alt=""
              />
              <Link
                to={`https://www.wikidata.org/wiki/${selector.info?.externalid?.wikidata_id}`}
              >
                <img
                  className="ml-10 w-5 h-5 bg-white rounded-full"
                  src="https://cdn-icons-png.flaticon.com/128/48/48930.png"
                  alt=""
                />
              </Link>
            </Link>
          </h1>
          <h1 className="text-white ml-20 font-serif mb-0"> Available On</h1>
          <div className="flex ml-20 mb-6">
            {rent?.map((item, index) => (
              <Link className="font-medium text-lg w-fit mt-2 mr-6 leading-tight  text-white ">
                <img
                  className="w-10 h-10 rounded-sm"
                  src={`https://image.tmdb.org/t/p/original/${item?.logo_path}`}
                  alt=""
                />
              </Link>
            ))}
          </div>

          <Link
            to={data?.homepage}
            className="font-medium text-md w-2/3 leading-tight ml-20 underline text-[#a3a3a3]"
          >
            Homepage
          </Link>

          <Link  to={`${pathname}/trailer`} className=" bg-white text-black ml-20 mt-6 font-semibold w-32 h-12 p-2 hover:text-lg rounded transition-all hover:scale-105 text-xl italic  ">
            Watch Now
          </Link>
          <button
            onClick={() => {
              setcards(!cards);
              // window.scrollTo({
              //   top: document.documentElement.scrollHeight*1.5 + window.innerHeight*1.5,
              //   behavior: "smooth",
              // });
              scrollToBottom();
            }}
            className="  text-white ml-20 mt-6 font-semibold w-fit h-12 hover:text-xl rounded transition-all hover:scale-105 text-lg italic  "
          >
            Recommendations? Click Here
          </button>
        </div>
        <div className=" relative  mt-20 ml-72 w-1/4 h-1/2 object-cover items-center justify-center">
          <img
            className="pr-10"
            src={`https://image.tmdb.org/t/p/original/${
              data?.poster_path || data?.backdrop_path
            }`}
            alt=""
          />
        </div>
      </div>

      {cards === true && <Cards data={cardData2 || cardData} />}
    </div>
  );
};

export default MovieDetails;
