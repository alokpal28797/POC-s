import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const imgAction = createAsyncThunk(
  "users/fetchByIdStatus",
  async (params, { rejectWithValue }) => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

    try {
      const response = await axios.get(url);
      console.log("🚀 ~ file: imgAction.jsx:11 ~ response:", response);
      return response?.data;
    } catch (error) {
      console.log("🚀 ~ file: imgAction.jsx:14 ~ error:", error);
      return rejectWithValue;
    }
  }
);
export default imgAction