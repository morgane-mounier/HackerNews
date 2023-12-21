import axios from "axios";

const BASE_URL = "https://hn.algolia.com/api/v1/search";

export const fetchDatas = async ({ query = "", page = 0, tags = "" }) => {
  try {
    const apiCall = await axios.get(
      `${BASE_URL}?query=${query}&page=${page}&tags=${tags}`
    );
    console.log("fetchDatas", apiCall.data);

    return apiCall.data;
  } catch (err) {
    console.log(err);
  }
};
