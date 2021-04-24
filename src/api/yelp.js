import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer            kQV6olH5tKFtUTXJyAb-qYgUSQJVAavb06_yEy1bqOgtNo4ScT2AZCmtMr9saMU-fkoRPndKcdsv7AltHVi_rhhXZIeOe-eo1ZnTxaysW6bo61_ccKhEbyu-1r5RYHYx"
  }
});