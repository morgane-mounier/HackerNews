import axios from "axios";

const BASE_URL = "http://hn.algolia.com/api/v1/search";

// initier le paramètre query à vide de base
export const fetchDatas = async (query = "", page = 1) => {
  try {
    const apiCall = await axios.get(`${BASE_URL}?query=${query}?page=${page}`);
    console.log("fetchDatas", apiCall.data.hits);
    return apiCall.data.hits;
  } catch (err) {
    console.log(err);
  }
};
