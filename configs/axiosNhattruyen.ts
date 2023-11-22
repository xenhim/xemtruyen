import axios from "axios";
import queryString from "query-string";

/*const proxy = {
  host: "http://lindafisher0252_gmail_com:k2iaWLJ2xJDAJVu@la.residential.rayobyte.com:8000",
  port: 8000,
  auth: {
    username: "lindafisher0252_gmail_com",
    password: "k2iaWLJ2xJDAJVu",
  },
};*/
    
const axiosNhattruyen = axios.create({
  baseURL: "https://nhattruyenplus.com",
  proxy: {
    useHttpProxy: true,
    host: process.env.PROXY_HOST,
    port: process.env.PROXY_PORT,
    auth: {
      username: process.env.PROXY_USERNAME,
      password: process.env.PROXY_PASSWORD,
    },
  },
});

export default axiosNhattruyen;

