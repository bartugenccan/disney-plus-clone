import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.photo = action.payload.photo;
    },
    setSignOut: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLogin, setSignOut } = userSlice.actions;

export const selectPhoto = (state) => state.user.photo;

export default userSlice.reducer;
