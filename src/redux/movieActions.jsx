import { loadMovie } from "./movieSlice";
import axios from "../Components/Api/Axios";

export const loadMovieFun = (id,genre) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/${genre}/${id}`);
    const externalId = await axios.get(`/${genre}/${id}/external_ids`);
    const recommendations = await axios.get(`/${genre}/${id}/recommendations`);
    const similar = await axios.get(`/${genre}/${id}/similar`);
    const translations = await axios.get(`/${genre}/${id}/translations`);
    const videos = await axios.get(`/${genre}/${id}/videos`);
    const watchproviders = await axios.get(`/${genre}/${id}/watch/providers`);

    let finalData = {
      detail: detail.data,
      externalid: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map((m) => m.english_name),
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchproviders: watchproviders.data.results.IN,
    };
    dispatch(loadMovie(finalData));
    console.log(finalData);
  } catch (error) {
    console.log("Error: ", error);
  }
};
