import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  isLogin: false,
  registeredUser: [],
  errorMessage: "",
};
export const mySlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    showData: (state) => {},
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
      for (var i = 0; i < state.users.length; i++) {
        if (state.users[i].unique === actions.payload.unique) {
          state.users[i].name = actions.payload.name;
          state.users[i].age = actions.payload.age;
        }
      }
    },
    registerUser: (state, actions) => {
      state.registeredUser.push(actions.payload);
    },
    loginUser: (state, actions) => {
      const { email, pass } = actions.payload;
      const checkUser = state.registeredUser.filter(
        (user) => user.email === email && user.pass === pass
      );
      if (checkUser.length > 0) {
        state.isLogin = true;
        state.errorMessage = "Validddddd"
      } else {
        state.isLogin = false;
        state.errorMessage = "Invalidddddddd"
      }
    },
  },
});
export const {
  showData,
  addUser,
  removeUser,
  editUser,
  registerUser,
  loginUser,
} = mySlice.actions;
export default mySlice.reducer;
