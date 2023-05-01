import { createSlice } from "@reduxjs/toolkit";

interface User {
  username: string;
  phone: string;
  website: string;
}

const initialState: User = {
  username: "Aris",
  phone: "00000",
  website: "link",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userUpdated(state, action) {
      const { username, phone, website } = action.payload;
      const existingUser = state;
      if (existingUser.username === username) {
        existingUser.phone = phone;
        existingUser.website = website;
      }
    },
  },
});

export const { userUpdated } = userSlice.actions;
export default userSlice.reducer;
