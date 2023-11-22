import axios from "axios";
import queryString from "query-string";
import 'axios-proxy-conf';

const proxyHost = process.env.PROXY_HOST;
const proxyPort = process.env.PROXY_PORT;
const proxyUsername = process.env.PROXY_USERNAME;

let proxy: { host: string; port: number; auth: { username: string; password: string; }; } | undefined;

if (proxyHost && proxyPort) {
  proxy = {
    host: proxyHost,
    port: parseInt(proxyPort),
    auth: {
      username: proxyUsername || '',
      password: '',
    },
  };
}

const axiosNhattruyen = axios.create({
  baseURL: "https://nhattruyenplus.com",
  proxy,
});

export default axiosNhattruyen;
