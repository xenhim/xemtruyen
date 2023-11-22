import axios from "axios";
import queryString from "query-string";
import 'axios-proxy-conf';

/*const proxy = {
  host: "http://lindafisher0252_gmail_com:k2iaWLJ2xJDAJVu@la.residential.rayobyte.com:8000",
  port: 8000,
  auth: {
    username: "lindafisher0252_gmail_com",
    password: "k2iaWLJ2xJDAJVu",
  },
};*/
const proxyHost = process.env.PROXY_HOST;
const proxyPort = process.env.PROXY_PORT;
const proxyUsername = process.env.PROXY_USERNAME;

let proxy: { host: string; port: number; auth?: { username: string; password: string; }; } | undefined;

if (proxyHost && proxyPort) {
  proxy = {
    host: proxyHost,
    port: parseInt(proxyPort),
  };

  if (proxyUsername) {
    proxy.auth = {
      username: proxyUsername,
    };
  }
}

const axiosNhattruyen = axios.create({
  baseURL: "https://nhattruyenplus.com",
  proxy,
});

export default axiosNhattruyen;

