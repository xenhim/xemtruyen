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

const proxyList = [
  { ip: 'lindafisher0252_gmail_com:k2iaWLJ2xJDAJVu-session-2bf09368@la.residential.rayobyte.com', port: '8000' },
  { ip: 'lindafisher0252_gmail_com:k2iaWLJ2xJDAJVu-session-acf1f149@la.residential.rayobyte.com', port: '8000' },
  { ip: 'lindafisher0252_gmail_com:k2iaWLJ2xJDAJVu-session-fd544f0a@la.residential.rayobyte.com', port: '8000' },
  { ip: 'lindafisher0252_gmail_com:k2iaWLJ2xJDAJVu-session-cd717b1f@la.residential.rayobyte.com', port: '8000' },
  { ip: 'lindafisher0252_gmail_com:k2iaWLJ2xJDAJVu-session-b685baed@la.residential.rayobyte.com', port: '8000' },
  { ip: 'lindafisher0252_gmail_com:k2iaWLJ2xJDAJVu-session-de629bf1@la.residential.rayobyte.com', port: '8000' },
  { ip: 'lindafisher0252_gmail_com:k2iaWLJ2xJDAJVu-session-aee4a713@la.residential.rayobyte.com', port: '8000' },
  { ip: 'lindafisher0252_gmail_com:k2iaWLJ2xJDAJVu-session-baa677b0@la.residential.rayobyte.com', port: '8000' },
  { ip: 'lindafisher0252_gmail_com:k2iaWLJ2xJDAJVu-session-01b646fa@la.residential.rayobyte.com', port: '8000' },
  { ip: 'lindafisher0252_gmail_com:k2iaWLJ2xJDAJVu-session-26e7a2b1@la.residential.rayobyte.com', port: '8000' },
]; // Replace with your own list of proxies

// Function to rotate through the list of proxies
const rotateProxy = (): { ip: string; port: string; } => {
  const proxy = proxyList.shift(); // Get the next available proxy
  proxyList.push(proxy); // Add the current proxy back to the end of the list

  return {
    protocol: "http",
    host: proxy.ip,
    port: proxy.port,
  } as { ip: string; port: string; };
};


// sd
const axiosNhattruyen = axios.create({
  baseURL: "https://nhattruyenplus.com",
  proxy: rotateProxy(),
});

export default axiosNhattruyen;
