import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apifetchasync = createAsyncThunk("API_FETCH", async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const afterresponse = response.data;
    return afterresponse;
  } catch (error) {
    if (error) {
      throw Error("fetching error");
    } else {
      throw Error("fetching error");
    }
  }
});
