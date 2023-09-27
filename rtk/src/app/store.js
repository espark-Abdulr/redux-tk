import { configureStore } from "@reduxjs/toolkit";
import { mySlice } from "../features/mySlice";
// Yahan pe hum store banainge
// Ye step 1 hai hamara
export const store = configureStore({
  reducer: {
    UserData: mySlice.reducer,
  },
});
