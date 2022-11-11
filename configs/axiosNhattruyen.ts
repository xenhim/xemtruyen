import axios from "axios";

const BASE_URL_API = process.env.NEXT_PUBLIC_NHATTRUYEN as string;

const axiosNhattruyen = axios.create({
  baseURL: `https://corsproxy.io/?${encodeURIComponent(BASE_URL_API)}`,
  headers: {
    origin: "https://www.nettruyenin.com",
    referer: "https://www.nettruyenin.com",
  },
});

// axiosNhattruyen.interceptors.request.use(
//   async (config) => {
//     console.log("config: ", config);
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

export default axiosNhattruyen;
