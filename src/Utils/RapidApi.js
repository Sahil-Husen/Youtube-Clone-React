import axios from "axios";
const API = import.meta.env.VITE_YOUTUBE_API;
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  method: "GET",

  path: "/search/?q=despacito&hl=en&gl=US",
  headers: {
    "x-rapidapi-key": API,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};
// console.log(options);

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.log("error in fetching the data from the API", error);
    throw error;
  }
};
