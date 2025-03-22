import { createSlice } from "@reduxjs/toolkit";
import { apifetchasync } from "../../services/apifetchservice";

const userSlice = createSlice({
  // name uniqye hona chiaye
  name: "user",

  // state pass kni hugi agr data ko kisi state ma save krna hai to
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },

  

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(apifetchasync.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(apifetchasync.fulfilled, (state, payload) => {
      state.status = "succeeded";
      state.data = payload.payload;
    });

    builder.addCase(apifetchasync.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
