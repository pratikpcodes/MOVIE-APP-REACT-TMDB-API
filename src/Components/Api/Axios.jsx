import axios from "axios";

const instance = axios.create({
  baseURL: " https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",

    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDk3YTVhMjhhNzQ4NWRlMGIzZWVlOWRjMzQ5YzBhYSIsInN1YiI6IjY1ZTA1NzY3ODgwYzkyMDE4NjI3YTNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDeFTH3MA7pw9cSWdpWQJLd90octFfw5SNouoqWUzCE",
  },
});

export default instance;
