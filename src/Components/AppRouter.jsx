import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import App from "../App";
import Body from "./Body";
import SearchField from "./SearchField";
import New from "./New";
import Trending from "./Trending";
import Loader from "./Loader";
import Popular from "./Popular";
import Movies from "./Movies";
import TVShows from "./TVShows";
import People from "./People";
import TvShowDetails from "./TvShowDetails";
import MovieDetails from "./MovieDetails";

import PeopleDetails from "./PeopleDetails"
import Trailer from "./Trailer";
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/new",
        element: <Loader />,
      },
      {
        path: "/trend",
        element: <Trending />,
      },
      {
        path: "/pop",
        element: <Popular />,
      },
      {
        path: "/movie",
        element: <Movies />,
      },
      {
        path: "/tv",
        element: <TVShows />,
      },
      {
        path: "/people",
        element: <People />,
      },
      {
        path: "/tv/details/:id",
        element: <TvShowDetails />,
       },
      {
        path: "/movie/details/:id",
        element: <MovieDetails />,
   
      },
      {
        path: "/person/details/:id",
        element: <PeopleDetails/>,
      },
      {
        path: "/person/details/:id",
        element: <PeopleDetails/>,
      },
      {
        path: "/movie/details/:id/trailer",
        element : <Trailer/>
      },
      {
        path: "/tv/details/:id/trailer",
        element : <Trailer/>
      }


    ],
  },
]);

export default AppRouter;
