import axios from "axios";

const Axios = axios.create({
  baseURL:
    process.env.NODE_ENV === "/api",
  timeout: 50000,
});

export default Axios;
