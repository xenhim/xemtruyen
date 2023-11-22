import axios from "axios";
import queryString from "query-string";

const proxy = {
  host: "lindafisher0252_gmail_com:k2iaWLJ2xJDAJVu",
  port: 8000,
};

const axiosNhattruyen = axios.create({
  baseURL: "https://nhattruyenplus.com",
  proxy: proxy,
});
