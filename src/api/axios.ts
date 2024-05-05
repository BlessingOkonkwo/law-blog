import axios, { isCancel, isAxiosError } from "axios";

const axiosArticles = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 1000,
//   headers: { "X-Custom-Header": "foobar" },
});

export default axiosArticles;
