import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "a503f93960dc4445850e0d0bdee2eaf5" // RAWG api key
  }
});
