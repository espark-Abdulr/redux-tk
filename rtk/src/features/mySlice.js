import { createSlice } from "@reduxjs/toolkit";
const initialState = { users: [] };
export const mySlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    showData: (state) => {
      state.users = state.users;
    },
    addUser: (state, actions) => {
      state.users.unshift(actions.payload);
    },
    removeUser: (state, actions) => {
      const newArray = state.users.filter(
        (item) => item.unique !== actions.payload.unique
      );
      state.users = newArray;
    },
    editUser: (state, actions) => {
      for(var i = 0; i < state.users.length; i++){
        if(state.users[i].unique === actions.payload.unique){
          state.users[i].name = actions.payload.name
          state.users[i].age = actions.payload.age
        }
      }
    },
  },
});
export const { showData, addUser, removeUser, editUser } = mySlice.actions;
export default mySlice.reducer;
