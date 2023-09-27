import { createSlice } from "@reduxjs/toolkit";
const initialState = { users: [] };
export const mySlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    // addValue: () => {},
    // subValue: () => {},
    showData: (state) => {
      state.users = state.users;
    },
    addUser: (state, actions) => {
      // state.users = state.users.push(actions.payload);
      state.users.push(actions.payload);
    },
  },
});
export const { showData, addUser } = mySlice.actions;
export default mySlice.reducer;
