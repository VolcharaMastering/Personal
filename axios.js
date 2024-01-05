/* eslint-disable no-undef */
import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.URL,
});

// Inject Airtable API key on every request
axiosApi.interceptors.request.use((config) => {
  const apiKey = process.env.AIRTABLE_KEY;
  config.headers.Authorization = `Bearer ${apiKey}`;
  return config;
});


export default axiosApi;
