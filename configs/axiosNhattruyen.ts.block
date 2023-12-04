import axios from "axios";
import queryString from "query-string";


interface Proxy {
  protocol: string;
  host: string;
  port: number;
  username: string;
  password: string;
}

const proxies: Proxy[] = [
  {
    protocol: "http",
    host: "la.residential.rayobyte.com",
    port: 8000,
    username: "lindafisher0252_gmail_com",
    password: "k2iaWLJ2xJDAJVu-session-2de46e7d",
  },
  {
    protocol: "http",
    host: "la.residential.rayobyte.com",
    port: 8000,
    username: "lindafisher0252_gmail_com",
    password: "k2iaWLJ2xJDAJVu-session-03c2bb79",
  },
  {
    protocol: "http",
    host: "la.residential.rayobyte.com",
    port: 8000,
    username: "lindafisher0252_gmail_com",
    password: "k2iaWLJ2xJDAJVu-session-9c8e6fbb",
  },
  {
    protocol: "http",
    host: "la.residential.rayobyte.com",
    port: 8000,
    username: "lindafisher0252_gmail_com",
    password: "k2iaWLJ2xJDAJVu-session-7bdf6e47",
  },
  {
    protocol: "http",
    host: "la.residential.rayobyte.com",
    port: 8000,
    username: "lindafisher0252_gmail_com",
    password: "k2iaWLJ2xJDAJVu-session-6c3f9207",
  },
  {
    protocol: "http",
    host: "la.residential.rayobyte.com",
    port: 8000,
    username: "lindafisher0252_gmail_com",
    password: "k2iaWLJ2xJDAJVu-session-dac75501",
  },
];

function get_random_proxy(proxies: Proxy[]): Proxy {
  return proxies[Math.floor((Math.random() * proxies.length))];
}

const proxy = get_random_proxy(proxies); // Pass the proxies array to the function

const axiosNhattruyen = axios.create({
  baseURL: "https://ipinfo.io/json",
  proxy: proxy,
});

export default axiosNhattruyen;
