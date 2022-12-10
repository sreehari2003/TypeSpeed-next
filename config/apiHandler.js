import axios from "axios";

const baseUrl = "https://api-typespeed.onrender.com";

export const apiHandler = axios.create({
  baseURL: baseUrl,
});
