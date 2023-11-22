import axios from "axios";
import queryString from "query-string";

/*const proxy = {
  host: "la.residential.rayobyte.com",
  port: 8000,
  auth: {
    username: "lindafisher0252_gmail_com",
    password: "k2iaWLJ2xJDAJVu",
  },
};
*/
// sd
const axiosNhattruyen = axios.create({
  baseURL: "https://nhattruyenplus.com",
  proxy: "http://lindafisher0252_gmail_com:k2iaWLJ2xJDAJVu@la.residential.rayobyte.com:8000",
});

export default axiosNhattruyen;
